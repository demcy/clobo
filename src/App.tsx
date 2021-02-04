import React from 'react';
import './App.css';
import Header from './components/shared/Header';
import Register from './components/shared/Register';

const GetPage = () => {
    const route = window.location.pathname;
    if (route === '/Register') return <Register />;
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