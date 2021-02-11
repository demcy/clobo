import React from 'react';
import './App.css';
import User from './components/User';
import Header from './components/shared/Header';
import Login from './components/shared/Login';
import Register from './components/shared/Register';

const GetPage = () => {
    const route = window.location.pathname;
    if (route === '/Register') return <Register />;
    if (route === '/Login') return <Login />;
    if (route === '/User') return <User users = {[{email: 'la',password: 'lalal'}]}/>;
    return <Login />;
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