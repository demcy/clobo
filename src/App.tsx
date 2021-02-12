import React from 'react';
import './App.css';
import User from './components/User';
import Header from './components/shared/Header';
import Login from './components/shared/Login';
import Register from './components/shared/Register';

// var token = ''

// function assignToken(key: string){
//     token = key
//     console.log('assigned token' + token)
// }

const GetPage = () => {
    const route = window.location.pathname;
    if (route === '/Register') return <Register />;
    if (route === '/Login') return <Login />;
    if (route === '/User') return <User /> ;
    return <Register />;
}



const App = () => (
    <>
        <Header />
       
        <main role="main">
            {GetPage()}
        </main>
     

    </>
);

export default App;