import React from "react";
import style from './Card.module.css';
import { Link } from "react-router-dom";


export default function Card({ flag, name, continent, id }) {
    console.log(name)

    return (

        <div className={style.container}>
            <div>
                <Link to={`/detail/${id}`}>
                <img src={flag} alt="country" />
                <h2>Code: {id}</h2>
                <h2>Name: {name}</h2>
                <h2>Continents: {continent}</h2>
                </Link>
            </div>
        </div>
    )
}