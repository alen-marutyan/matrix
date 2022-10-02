import React from 'react';
import './App.css'
import {Header, Navbar} from "./components";
import {Home} from "./pages";

const App = () => {
    return (
        <div className='App'>
            <Navbar/>
            <Header/>
            <Home/>
        </div>
    );
};

export default App;
