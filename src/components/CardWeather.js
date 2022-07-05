import { useState, useEffect } from 'react';
import './styles/style.css';
import imagenClima from './images/states/partly_cloudy.png';
import wind from './images/Wind.png';
import humidity from './images/Humidity.png';

const CardWeather = () =>{
    if (navigator.geolocation) { //check if geolocation is available
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords);
        });   
    }
    var url = ['http://api.weatherapi.com/v1/current.json?key=1f96e82b40f44b5f92b00703222205&q=Ixtapaluca&aqi=no','http://api.weatherapi.com/v1/forecast.json?key=1f96e82b40f44b5f92b00703222205&q=Ixtapaluca&days=1&aqi=no&alerts=no', 'https://jsonplaceholder.typicode.com/todos/'];
    const [data, setData] = useState({});
    const [temp, setTemp] = useState({});
    const [condition, setCondition] = useState({});
    var fecha,newFecha;
    
    const fetchApi = async () => {
        const response = await fetch(url[0]);
        // console.log(response.status); //Para saber el estado de la petición 
        const responseJSON = await response.json();
        setData(responseJSON.location);
        setTemp(responseJSON.current);
        setCondition(responseJSON.current.condition);
        console.log(responseJSON.current.condition); //Para ver los datos obtenidos en la petición
    }
    
    useEffect(()=>{
        fetchApi();
    },[])
    // console.log(newFecha);
    if(!data) return <h1>Cargando...</h1>
    return(
        <div className=''>
            <div className='card-main'>
                <div className='first-section'>
                    <h1 className="titulo-card-weather">Today, {data.localtime}</h1>
                    <img className='imagen-card-weather ' src={condition.icon} alt="partly_cloudy" />
                    <h2 className="text-card-weather">{temp.temp_c}°</h2>
                    <h3 className="text-card-weather">{data.name}</h3>
                </div>
                <br/>
                <div className='linea-div'></div>
                <br/>
                <div className='second-section'>
                    <h4 className="text-card-weather">{condition.text}</h4>
                    <br />
                    <div className='center-items-card'>
                        <div className='wind aling details'>
                            <img src={wind} alt="" />
                            <div className='linea-renglon'></div>
                            <h3 className='data-details'>{temp.wind_kph} km/h</h3>
                        </div>
                    </div>
                    <br/>
                    <div className='center-items-card'>
                        <div className='humidity aling details'>
                            <img src={humidity} alt="" />
                            <div className='linea-renglon'></div>
                            <h3 className='data-details'>{temp.humidity}%</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default CardWeather;