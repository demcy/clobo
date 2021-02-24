import Axios from 'axios';
import { IUser } from '../domain/IUser';

export abstract class UserApi {
    private static axios = Axios.create(
        {
            baseURL: 'https://localhost:4000',
            //baseURL: 'https://clobo-backend.vercel.app',
            headers: {
                common: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    //'withCredentials': 'true'
                }
            }
        }
    )
    static async getAll(): Promise<IUser[]> {
        const url = '/users';
        //this.axios.defaults.headers.common = {'Authorization': 'Bearer ' + document.cookie.split('=')[1]} 
        //this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + document.cookie.split('=')[1]
         //console.log(document.cookie.split('=')[1])
        //console.log(this.axios.defaults.headers.common)
        try{
            const response = await this.axios.get<IUser[]>(url, {withCredentials:true});
            
            console.log('get all response', response);
            if (response.status === 200) {
                return response.data;
            }
            return [];
        }
        catch (error) {
            console.log('error', (error as Error).message);
            return [];
        }
    }

    static async register(email: string, password: string): Promise<string>{
        const url = '/register';
        this.axios.defaults.method = 'POST'
        try{
            const response = await this.axios.post<string>(url, JSON.stringify({email, password}));
            console.log('get all response', response);
            if (response.status === 201) {
                return response.data;
            }
            return 'Error registering your email';
        }
        catch (error) {
            if( error.response.status === 409){
                return error.response.data
            }
            return error.message;
        }
    }

    static async confirm(token: string): Promise<string>{
        const url = '/confirm';
        this.axios.defaults.method = 'POST'
        try{
            const response = await this.axios.post<string>(url, JSON.stringify({token}));
            console.log('get all response', response);
            if (response.status === 200) {
                return 'Thank you for confirming your email';
            }
            return 'Error confirming your email';
        }
        catch (error) {
            if( error.response.status === 403){
                return 'Error confirming your email'
            }
            if(error.response.status === 401){
                console.log(error.response.data)
                return error.response.data
            }
            return error.message;
        }
    }

    static async login(email: string, password: string): Promise<string>{
        const url = '/login';
        try{
            const response = await this.axios.post<string>(url, JSON.stringify({email, password}), {withCredentials:true}); 
            console.log('get all response', response);
            if (response.status === 200) {
                return response.data;
            }
            return 'Error logining into your account'
        }
        catch (error) {
            //console.log(error.response.data)
            return error.response.data
        }
    }

    // static async getById(id: number): Promise<IDevice> {
    //     const url = '/' + id.toString();
    //     const D : IDevice = {
    //         id: 0,
    //         name: '',
    //         money: 0,
    //         count: 0
    //     }
    //     console.log(url)
    //     try{
    //         const response = await this.axios.get<IDevice>(url);
    //         console.log('get all response', response);
    //         if (response.status === 200) {
    //             return response.data;
    //         }
    //         return D;
    //     }
    //     catch (error) {
    //         console.log('error', (error as Error).message);
    //         return D;
    //     }
    // }

    // static async updateById(id: number, data: any): Promise<IDevice> {
    //     const url = '/' + id.toString();
    //     try{
    //         const response = await this.axios.put<IDevice>(url, data);
    //         console.log('get all response', response);
    //         if (response.status === 200) {
    //             return response.data;
    //         }
    //         return data;
    //     }
    //     catch (error) {
    //         console.log('error', (error as Error).message);
    //         return data;
    //     }
    // }
}