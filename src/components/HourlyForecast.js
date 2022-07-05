import { useState, useEffect } from 'react';
import './styles/style.css';

import RainySun from './images/Rain&Sun.png';


const HourlyForecast = (props) =>{
    if(props.main==true){
        return(
            <div className=''>
                <div className='daily-card-main'>
                    <img className='img-daily' src={RainySun} alt="" />
                    <p className='daily-data-main'>20.9°</p>
                    <p className='daily-data-main'>30/06</p>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className=''>
                <div className='daily-card'>
                    <img className='img-daily' src={RainySun} alt="" />
                    <p className='daily-data-second'>20.9°</p>
                    <p className='daily-data-second'>30/06</p>
                </div>
            </div>
        );
    }
}

export default HourlyForecast;