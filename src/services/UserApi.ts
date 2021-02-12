import Axios from 'axios';
import { IUser } from '../domain/IUser';

export abstract class UserApi {
    private static axios = Axios.create(
        {
            baseURL: 'http://localhost:4000',
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
            return 'trying';
        }
        catch (error) {
            console.log('error', (error as Error).message);
            return error;
        }
    }

    static async login(email: string, password: string): Promise<string>{
        const url = '/login';
        try{
            const response = await this.axios.post<string>(url, JSON.stringify({email, password}));
            console.log('get all response', response);
            if (response.status === 200) {
                return response.data;
            }
            return 'trying';
        }
        catch (error) {
            console.log('error', (error as Error).message);
            return error;
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