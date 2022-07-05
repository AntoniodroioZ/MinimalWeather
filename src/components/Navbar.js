import { useState, useEffect } from 'react';
// http://api.weatherapi.com/v1/current.json?key=1f96e82b40f44b5f92b00703222205&q=Ixtapaluca&aqi=no
// http://api.weatherapi.com/v1/forecast.json?key=1f96e82b40f44b5f92b00703222205&q=Ixtapaluca&days=1&aqi=no&alerts=no

const Navbar = ()=>{
    var url = ['http://api.weatherapi.com/v1/current.json?key=1f96e82b40f44b5f92b00703222205&q=Ixtapaluca&aqi=no','http://api.weatherapi.com/v1/forecast.json?key=1f96e82b40f44b5f92b00703222205&q=Ixtapaluca&days=1&aqi=no&alerts=no', 'https://jsonplaceholder.typicode.com/todos/'];
    const [data, setData] = useState({});
    const [temp, setTemp] = useState({});
    const [condition, setCondition] = useState({});
    
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
    console.log(data.name);
    if(!data) return <h1>Cargando...</h1>
    return(
        <div className='datosAPI'>
            <h1>Your location is: {data.name}</h1>
            <h2>{data.name} is located in {data.country}</h2>
            <p>The temperature in {data.name} is: {temp.temp_c}° Celsius</p>
            <p>The condition is: {condition.text} <img src={condition.icon} alt="" /></p>
        </div>
    );
    
};

export default Navbar;









