import { ADD_COUNTRIES, FILTER, } from "./action";

const initialState = {
    countries: [], // mostramos todos los paises
    Fill: false,
    CountriesFill: [], // mostramos todos los paises pero filtrado
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





        default:
            return {
                ...state
            }
    }
}

export default reducer;