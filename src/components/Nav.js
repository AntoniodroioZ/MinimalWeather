import { useState, useEffect } from 'react';
import './styles/style.css';
import clearNight from './images/Clear-night.png';
import Sunny from './images/Sunny.png';

const Nav = () =>{
    return(
        <nav className=''>
            <div className='Nav '>
                <div className='container aling space-between'>
                    <p className='logo'>Minimal Weather</p>
                    <div className='form-search'>
                        <input type="text" name="" id="" className='search' placeholder='Search'/>
                        <button type="submit" className='search-btn'><i className="fa fa-search search-icon"></i></button>
                    </div>
                    <div className=''>
                        <button className='btn-night btn-mode'><div className='select-mode'><img className='img-night' src={clearNight} alt=""/></div></button>
                        <button className='btn-day btn-mode'><img className='img-day' src={Sunny} alt=""/></button>
                    </div>
                    <a href="#" className='about'>About</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;