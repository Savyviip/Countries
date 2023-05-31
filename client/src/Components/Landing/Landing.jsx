import React from 'react'
import './Landing.css';
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div className='container'>
            <img src="https://wallpaperaccess.com/full/352355.jpg" alt='LandingImage' />

            <Link className="containerButton" to="/home">
                <button className='button'>INICIO</button>
            </Link>


        </div>
    )
}

export default Landing;

