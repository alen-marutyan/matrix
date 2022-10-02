import React from 'react';
import './Navbar.scss';
import {AiFillDashboard, AiFillHeart, AiFillSetting, AiTwotoneNotification} from "react-icons/ai";
import {GiHeartKey} from "react-icons/gi";
import {BiTimeFive} from "react-icons/bi";
import {FaChartArea, FaUserAlt} from "react-icons/fa";
import {MdKeyboardArrowRight, MdRemoveRedEye} from "react-icons/md";
import {TbArrowsLeftRight} from "react-icons/tb";
import logo from '../../assets/FE internship test design (1).jpg'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='logo'>
                <div style={{backgroundImage: `url(${logo})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', width: 50, height: 53}}></div>
            </div>
            <div className='menu'>
                <span className='openNav'>
                        <MdKeyboardArrowRight/>
                </span>
                <div className="menu1">

                    <span >
                        <AiFillDashboard/>
                    </span>
                    <span>
                        <GiHeartKey/>
                    </span>
                    <span>
                        <FaUserAlt/>
                    </span>
                    <span>
                        <AiTwotoneNotification/>
                    </span>
                    <span>
                        <FaChartArea/>
                    </span>
                    <span>
                        <TbArrowsLeftRight/>
                    </span>
                    <span>
                        <AiFillSetting/>
                    </span>
                </div>
                <div className="menu2">
                    <span>
                        <AiFillHeart/>
                    </span>
                    <span>
                        <BiTimeFive/>
                    </span>
                    <span>
                        <MdRemoveRedEye/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
