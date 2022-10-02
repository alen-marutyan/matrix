import React from 'react';
import {IoIosArrowDown} from "react-icons/io";
import ChartLine from "../../components/chart/ChartLine";
import ChartPie from "../../components/chart/ChartPie";
import Maps from "../../components/Maps/Maps";
import './Home.scss'

const Select3 = () => {
    return (
        <div className="select3">
            <div className='Vectors'>
                <div className='maps_head'>
                        <span>
                            <h2>Medias Stats</h2>
                        </span>
                    <span>
                            <h3>Last Week</h3>
                            <IoIosArrowDown/>
                        </span>
                </div>
                <ChartLine/>
                <div className='line_footer'>
                        <span>
                            <span className='color_one'></span>
                            <p>Clicks</p>
                        </span>
                    <span>
                            <span className='color_two'></span>
                            <p>Page View</p>
                        </span>
                    <span>
                            <span className='color_three'></span>
                            <p>Sign ups</p>
                        </span>
                </div>
            </div>
            <div className='PieChart'>
                <div className='pie_header'>
                    <h3>Active Medias</h3>
                </div>
                <ChartPie/>
                <div className='pie_footer'>
                        <span className='pie_footer_name'>
                            <p>CTR</p>
                            <p style={{marginRight: 30}}>25%</p>
                        </span>
                    <span>
                            <span className="round one"><span></span></span>
                            <span className={'pie_footer_info'}>
                                <p>Total Views</p>
                                <p>200</p>
                            </span>

                        </span>
                    <span>
                            <span className="round two"><span></span></span>
                            <span className={'pie_footer_info'}>
                                <p>Total Clicks</p>
                                <p>65</p>
                            </span>

                        </span>
                    <span>
                            <span className="round three"><span></span></span>
                            <span className={'pie_footer_info'}>
                                <p>Signups</p>
                                <p>22</p>
                            </span>
                        </span>
                </div>
            </div>
            <div className='Maps'>
                <div className='maps_head'>
                        <span>
                            <h2>Geographic Data</h2>
                        </span>
                    <span>
                            <h3>Last Month</h3>
                            <IoIosArrowDown/>
                        </span>
                </div>
                <div className='maps_main'>
                    <div className='square'>
                        <span></span>
                        <span></span>
                    </div>
                    <Maps/>
                </div>
                <div className='maps_footer'>
                        <span className='maps_footer_name'>
                            <h3>Affiliate Sign Ups</h3>
                            <IoIosArrowDown/>
                        </span>
                    <span>
                            <p>1. United States</p>
                            <p>200</p>
                        </span>
                    <span>
                            <p>2. China</p>
                            <p>65</p>
                        </span>
                    <span>
                            <p>3. United Kingdom</p>
                            <p>22</p>
                        </span>
                </div>
            </div>
        </div>
    );
};

export default Select3;
