import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from "./Detail.module.css";
import { countryForId } from '../../Redux/action';


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Detail_Country = useSelector(state => state.countryForId);
  console.log(id)
  useEffect(() => {   // cuando uso el dispatch lo levanta de forma automaticamente, le da vida.
    dispatch(countryForId(id))  // EL DISPATCH EJECUTA ACCIONES
  }, [])

  let obj = "";
  if (Detail_Country !== undefined) {
    obj = {
      id: Detail_Country.id,
      name: Detail_Country.name,
      flag: Detail_Country.flag,
      continent: Detail_Country.continent,
      capital: Detail_Country.capital,
      subregion: Detail_Country.subregion,
      area: Detail_Country.area,
      population: Detail_Country.population,
    }
  }

  return (
    <div className={style.container}>
      <p>{obj.name}</p>
      <img src={obj.flag} alt="flag" />
      <p>id: {obj.id}</p>
      <p>continent: {obj.continent}</p>
      <p>capital: {obj.capital}</p>
      <p>subregion: {obj.subregion}</p>
      <p>area: {obj.area}</p>
      <p>population: {obj.population}</p>
    </div>
  )
}

export default Detail;

