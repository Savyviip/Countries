import { useEffect, useState } from 'react';
import Card from './Card/Card.jsx';
import { useDispatch, useSelector } from "react-redux";
import { getCountries, searchCountries } from "../Redux/action";
import style from './Cards.module.css';

export default function Cards() {
  const countryfill = useSelector((state) => state.countryfill);
  const fill = useSelector((state) => state.fill);
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);
  const Search = useSelector(state => state.searchCountries); // El resultado del despacho, de la funcion.
  const [filter, setFilter] = useState(fill);



  const itemsPerPage = 10; // Número de elementos por página
  const totalPages = Math.ceil(countries.length / itemsPerPage); // Cálculo del número total de páginas
  const [currentPage, setCurrentPage] = useState(1); // Página actual

  useEffect(() => {
    dispatch(getCountries());
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

  // Lógica para obtener los elementos a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const countriesToShow = countries.slice(startIndex, endIndex);

  return (
    <div className={style.container}>
      {/* tambien puedo ponerle un boton haciendole onClick={handlerSearch}  onChange hace filtrado de lo que me trae  */}
      <input type="text" onChange={handlerSearch} />
      <div className={style.cards}>
        
        {filter ? Search.map(country =>
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