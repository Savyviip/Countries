import { useEffect, useState } from 'react';
import Card from './Card/Card.jsx';
import { useDispatch, useSelector } from "react-redux";
import { getCountries, searchCountries, Filter, GetActivities, FilterActivity } from "../Redux/action";
import style from './Cards.module.css';

export default function Cards() {
  const fill = useSelector((state) => state.fill);
  const FilterCountry = useSelector(state => state.CountriesFill)
  const fillActivity = useSelector(state => state.fillActivity)
  const activitiesList = useSelector(state => state.activity)
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);
  const Search = useSelector(state => state.searchCountries); // El resultado del despacho, de la funcion.
  const [filter, setFilter] = useState(fill);

  const itemsPerPage = 10; // Número de elementos por página
  const totalPages = Math.ceil(countries.length / itemsPerPage); // Cálculo del número total de páginas
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [fillAsc, setFillAsc] = useState(false); // estado que controla la vista de ascendente
  const [fillDes, setFillDes] = useState(false); // estado que controla la vista de descendente
  const [fillCont, setFillCont] = useState(false);
  const [fillAct, setFillAct] = useState(false);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(GetActivities());
    setFilter(false)
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevious = () => {
    handlePageChange(currentPage - 3);
  };

  const handleNext = () => {
    handlePageChange(currentPage + 3);
  };

  const getPageNumbers = () => {
    const maxPageButtons = 3; // Número máximo de botones de página a mostrar
    const pageNumbers = [];

    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  //creamos una funcion con un evento y esa funcion va a tener un dispatch hacia searchCountries.
  // esa funcion va a onChangeSearch LINEA 63, de un input
  const handlerSearch = (event) => {
    setFilter(true)
    dispatch(searchCountries(event.target.value))
  }

  const FillHandlerActivity = (event) => {
    // si es diferente, hago el dispatch
    if (event.target.value !== "0") {
      setFilter(false)
      setFillAct(true)
      dispatch(FilterActivity(event.target.value))

    }
  }

  const OrderCountry = (event) => {
    if (event.target.value === "a") {
      dispatch(Filter(event.target.value))
      setFillAsc(true);
      setFilter(false);
    }
    if (event.target.value === "d") {
      dispatch(Filter(event.target.value))
      setFillAsc(false);
      setFilter(false);
      setFillDes(true);
    }
    if (event.target.value === "population-A") {
      dispatch(Filter(event.target.value))
      setFillAsc(false);
      setFilter(false);
      setFillDes(false);
    }
    if (event.target.value === "population-B") {
      dispatch(Filter(event.target.value))
      setFillAsc(false);
      setFilter(false);
      setFillDes(true);
    }
  }
  //Si ingresa numeros, ingresa al if
  const fillContinent = (event) => {
    if (isNaN(event.target.value)) {
      dispatch(Filter(event.target.value))
      setFilter(false);
      setFillCont(true);
    }
  }

  // Lógica para obtener los elementos a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const countriesToShow = countries.slice(startIndex, endIndex);

  return (
    <div className={style.container}>
      {/* tambien puedo ponerle un boton haciendole onClick={handlerSearch}  onChange hace filtrado de lo que me trae  */}


      <input type="text" onChange={handlerSearch} />
      <br />
      {/* Ordenamiento ascendente, descendente */}
      <div className={style.containerFilters2}>
        <div className={style.containerFilters}>
          <select onChange={OrderCountry}>
            <option>(+)/(-)</option>
            <option value="a">Country (+)</option>
            <option value="d">Country (-)</option>
            <option value="population-A">Population (+)</option>
            <option value="population-B">Population (-)</option>
          </select>

          <select onChange={fillContinent}>
            <option>Continent</option>
            <option value="Africa">Africa (+)</option>
            <option value="South America">South America (-)</option>
            <option value="Asia">Asia (+)</option>
            <option value="North America">North America (-)</option>
            <option value="Europe">Europe (+)</option>
            <option value="Oceania">Oceania (-)</option>
          </select>

          <select onChange={FillHandlerActivity}>
            <option value="0">Activity</option>
            {activitiesList?.map((element, index) => {
              return <option key={index} value={element.name}>{element.name}</option>
            })}
          </select>
        </div>
      </div>

      <div className={style.cards}>

        {filter ? Search.map(country =>
          <Card
            key={country.id}
            id={country.id}
            flag={country.flag}
            name={country.name}
            continent={country.continent}
          />

        ) : fillAsc ? FilterCountry.map(country =>
          <Card
            key={country.id}
            id={country.id}
            flag={country.flag}
            name={country.name}
            continent={country.continent}
          />
        ) : fillDes ? FilterCountry.map(country =>
          <Card
            key={country.id}
            id={country.id}
            flag={country.flag}
            name={country.name}
            continent={country.continent}
          />
        ) : fillCont ? FilterCountry.map(country =>
          <Card
            key={country.id}
            id={country.id}
            flag={country.flag}
            name={country.name}
            continent={country.continent}
          />
        ) :
          fillAct ? fillActivity.map(country =>
            <Card
              key={country.id}
              id={country.id}
              flag={country.flag}
              name={country.name}
              continent={country.continent}
            />
          ) : countriesToShow.map(country =>
            <Card
              key={country.id}
              id={country.id}
              flag={country.flag}
              name={country.name}
              continent={country.continent}
            />
          )}

      </div>
      <div className={style.pagination}>
        <button
          disabled={currentPage <= 1}
          onClick={handlePrevious}
        >
          Anterior
        </button>
        {getPageNumbers().map(page =>
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? style.activePage : ''}
          >
            {page}
          </button>
        )}
        <button
          disabled={currentPage >= totalPages}
          onClick={handleNext}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}