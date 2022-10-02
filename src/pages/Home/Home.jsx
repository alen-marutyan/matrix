import React from 'react';
import './Home.scss'
import Select4 from "./Select4";
import Select1 from "./Select1";
import Select2 from "./Select2";
import Select3 from "./Select3";

const Home = () => {
    return (
        <div className='Home'>
            <Select1/>
            <Select2/>
            <Select3/>
            <Select4/>
        </div>
    );
};

export default Home;
