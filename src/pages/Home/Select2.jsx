import React from 'react';
import {FaChartLine, FaCheck, FaMoneyBillAlt} from "react-icons/fa";
import {BsFillQuestionCircleFill} from "react-icons/bs";
import './Home.scss'

const Select2 = () => {
    return (
        <div className="select2">
            <div className='container one'>
                <h2>25</h2>
                <span>
                        <FaCheck/>
                        <h3>SIGNUPS</h3>
                    </span>
            </div>
            <div className='container two'>
                <h2>$1000</h2>
                <span>
                        <FaChartLine/>
                        <h3>PROFIT</h3>
                    </span>
            </div>
            <div className='container three'>
                <h2>$350</h2>
                <span>
                        <FaMoneyBillAlt/>
                        <h3>COMMISSIONS</h3>
                    </span>
            </div>
            <div className='container four'>
                <h2>$300</h2>
                <span>
                        <BsFillQuestionCircleFill/>
                        <h3>PENDING COMMISSION</h3>
                    </span>
            </div>
        </div>
    );
};

export default Select2;
