import { useState, useEffect } from 'react';
import './styles/style.css';
import imagenClima from './images/states/partly_cloudy.png';
import wind from './images/Wind.png';
import humidity from './images/Humidity.png';

import DailyForecast from './DailyForecast.js';
import HourlyForecast from './HourlyForecast.js';

const CardDaily = () =>{
    var itemsDaily = [];
    var itemsHourly = [];
    
    for(var i=0;i<4;i++){
        if(i==1){
            itemsDaily.push(<DailyForecast main/>);
        }else{
            itemsDaily.push(<DailyForecast/>);
        }
    }
    
    for(var i=0;i<4;i++){
        if(i==1){
            itemsHourly.push(<HourlyForecast main/>);
        }else{
            itemsHourly.push(<HourlyForecast/>);
        }
    }
    
    return(
        <div className=''>
            <div className='card-second '>
                <h1 className='first-title-second-card text-card-weather'>Daily Forecast</h1>
                <div className='aling espacio-daily-cards'>
                    {itemsDaily}
                    
                </div>
                <h1 className='first-title-second-card text-card-weather'>Hourly Forecast</h1>
                <div className='hourly-container'>
                    <div className='aling espacio-daily-cards'>
                        {itemsHourly}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDaily;