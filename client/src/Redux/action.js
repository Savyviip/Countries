import axios from "axios";

export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES"  // type: es lo verde
export const ADD_COUNTRIES = "ADD_COUNTRIES";
export const FILTER = "FILTER";
export const ID_COUNTRIES = "ID_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const POST = "POST";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";

// Le hace la peticion al GET que retorna todos los paises
export const getCountries = () => {
    return async function (dispatch) {
        const country = await axios.get("http://localhost:3001/countries");
        console.log(country.data)

        dispatch({
            type: ADD_COUNTRIES,
            payload: country.data,    // country esta entrando a data // payload es lo que le da el dato al reducer
        })
    }
}
// Le hace la peticion a la query 
export const searchCountries = (name) => {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/?name=${name}`);

            if (data) return dispatch({
                type: SEARCH_COUNTRIES,
                payload: data
            });
        } catch (error) { window.alert(error.message) }; // {window.alert(error.response.data.error)} 
    };
}

export const countryForId = (id) => {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/${id}`);

            if (data) return dispatch({
                type: ID_COUNTRIES,
                payload: data
            });
        } catch (error) { window.alert(error.message) }; // {window.alert(error.response.data.error)} 
    };
}

export const Filter = (ct) => {
    return {
        type: FILTER,
        payload: ct,
    }
}

export const GetActivities = () => {
    return async function (dispatch) {
        const activities = await axios.get("http://localhost:3001/activities");
        dispatch({
            type: GET_ACTIVITIES,
            payload: activities.data,
        })
    }
}

export const PostActivity = (post) => {
    return async function (dispatch) {
        try {
            const newActivity = await axios.post('http://localhost:3001/activities', post)
            dispatch({
                type: POST,
                payload: newActivity,
            })
            alert("Created Successfully")
            document.getElementById("name").value = "";
            document.getElementById("difficulty").value = 1;
            document.getElementById("hours").value = 1;
        } catch (error) {
            alert(error.response.data.error)
            document.getElementById("name").value = "";
            document.getElementById("difficulty").value = 1;
            document.getElementById("hours").value = 1;
        }
    }
}

export const FilterActivity = (act) => {
    return function (dispatch) {
        return dispatch({
            type: FILTER_ACTIVITY,
            payload: act,
        })
    }
}