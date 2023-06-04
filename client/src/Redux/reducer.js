import { ADD_COUNTRIES, FILTER, ID_COUNTRIES, SEARCH_COUNTRIES, GET_ACTIVITIES } from "./action";

const initialState = {
    countries: [], // mostramos todos los paises
    searchCountries: [],
    CountriesFill: [], // mostramos todos los paises pero filtrado
    countryForId: [],
    Fill: false,
    activity: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNTRIES:
            return {
                ...state, countries: action.payload
            };

        // los filtros de mis filtros
        case FILTER:
            if (action.payload === "a") {
                return {
                    ...state, Fill: true, CountriesFill: state.countries.sort((prev, next) => {
                        if (prev.name > next.name) return -1;
                        if (prev.name < next.name) return 1;
                        return 0;
                    })
                }
            } if (action.payload === "d") {
                return {
                    ...state, Fill: true, CountriesFill: state.countries.sort((prev, next) => {
                        if (prev.name > next.name) return 1;
                        if (prev.name < next.name) return -1;
                        return 0;
                    })
                }
            }
            if (action.payload === "population-A") {
                return {
                    ...state, Fill: true, CountriesFill: state.countries.sort((a, b) => {
                        return a.population - b.population;
                    })
                }
            }
            if (action.payload === "population-B") {
                return {
                    ...state, Fill: true, CountriesFill: state.countries.sort((a, b) => {
                        return b.population - a.population;
                    })
                }
            }
            if (action.payload === "Africa" ||
                action.payload === "Asia" ||
                action.payload === "North America" ||
                action.payload === "South America" ||
                action.payload === "Oceania" ||
                action.payload === "Europe") {
                return {
                    ...state, Fill: true, CountriesFill: state.countries.filter((element) => element.continent === action.payload
                    )
                }
            }


        case SEARCH_COUNTRIES:
            return {
                ...state, Fill: true, searchCountries: action.payload  // La propiedad fill es true cuando filtro un dato, sino trae todos los paises, 
            };

        case ID_COUNTRIES:
            return {
                ...state, countryForId: action.payload
            };

        case GET_ACTIVITIES:
            return {
                ...state, activity: action.payload
            };

        // linea 30 tanto searchCountries como linea 5 se llaman igual








        default:
            return {
                ...state
            }
    }
}

export default reducer;