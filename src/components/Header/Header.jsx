import React from 'react';
import './Header.scss'
import {AiOutlineMenuFold} from "react-icons/ai";
import {RiArrowDownSFill} from "react-icons/ri";

const Header = () => {
    return (
        <div className='Header'>
            <div className='icon'>
                <span>
                    <AiOutlineMenuFold/>
                </span>
            </div>
            <div className='language'>
                <img
                    alt="United States"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"/>
                <h3>EN</h3>
            </div>
            <div className='information'>
                <div className='information_image'>
                    <img src="" alt=""/>
                </div>
                <div className='information_text'>
                    <div className='text'>
                        <h3>Hello, Max!</h3>
                        <p>Last login: Thu Mar 20 2014</p>
                    </div>
                    <div className='information_text_icon'>
                        <RiArrowDownSFill/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
