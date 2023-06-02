import { ADD_COUNTRIES, FILTER, ID_COUNTRIES, SEARCH_COUNTRIES } from "./action";

const initialState = {
    countries: [], // mostramos todos los paises
    searchCountries: [],
    CountriesFill: [], // mostramos todos los paises pero filtrado
    countryForId: [],
    Fill: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNTRIES:
            return {
                ...state, countries: action.payload
            };

        case FILTER:
            if (action.payload === "a") {
                return {
                    ...state, Fill: true, CountriesFill: state.countries.sort((prev, next) => {
                        if (prev.name > next.name) return -1;
                        if (prev.name < next.name) return 1;
                        return 0;
                    })
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

        // linea 30 tanto searchCountries como linea 5 se llaman igual








        default:
            return {
                ...state
            }
    }
}

export default reducer;