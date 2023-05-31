import axios from "axios";

export const ADD_COUNTRIES = "ADD_COUNTRIES";
export const FILTER = "FILTER";


export const getCountries = () => {
    return async function (dispatch) {
        const country = await axios.get("http://localhost:3001/countries");
        console.log(country.data)

        dispatch({
            type: ADD_COUNTRIES,
            payload: country.data,    // pais esta entrando a data // payload es lo que le da el dato al reducer
        })
    }
}

export const Filter = (ct) => {
    return {
        type: FILTER,
        payload: ct,
    }
}