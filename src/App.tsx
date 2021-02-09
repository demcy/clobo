import React from 'react';
import './App.css';
import Accounts from './components/Accounts';
import Header from './components/shared/Header';
import Login from './components/shared/Login';
import Register from './components/shared/Register';

const GetPage = () => {
    const route = window.location.pathname;
    if (route === '/Register') return <Register />;
    if (route === '/Login') return <Login />;
    if (route === '/Accounts') return <Accounts accounts = {[]}/>;
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