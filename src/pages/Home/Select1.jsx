import React from 'react';
import {AiFillHeart} from "react-icons/ai";
import './Home.scss'

const Select1 = () => {
    return (
        <div className="select1">
            <div className="dashboard">
                <h3>Dashboard</h3>
            </div>
            <div className="addThisPageToFavorites">
                <AiFillHeart/><h3>ADD THIS PAGE TO FAVORITES</h3>
            </div>
        </div>
    );
};

export default Select1;
