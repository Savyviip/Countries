import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, PostActivity } from "../../Redux/action";
import style from "./Form.module.css";

const Form = () => {
    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();

    // aca vamos a crear las actividades
    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    });
    // este mensaje de error si el usuario mal ingresa
    const [error, setError] = useState({
        name: "",
        duration: "",
    });

    useEffect(() => {
        dispatch(getCountries())
    }, []);

    // validacion de errores por el Post
    const validate = (value, property) => {
        let ExRegsololetras = /\d/;  // solo letras en el input
        if (property === "name") {
            if (ExRegsololetras.test(value)) {
                setError({ ...error, name: "im sorry, Only Letters" })
            } else if (value.length < 1) {
                setError({ ...error, name: "im sorry, Cannot be Empty" })
            } else {
                setError({ ...error, name: "" })
            }
        }
        if (property === "duration") {
            if (value > 20) {
                setError({ ...error, duration: " Cannot exceed 20hs" })
            } else {
                setError({ ...error, duration: "" })
            }
        }
    }


    // capturamos lo que ingresamos ( value ) en el input, guardamos en estados
    const handlerActivity = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setActivity({ ...activity, [property]: value }) // value es el valor que entrega  difficulty y hours
        validate(value, property)
    }
    // capturamos lo que ingresamos desde el select y lo guardamos en estados.
    const handlerCombo = (event) => {
        const value = event.target.value;
        let arr = [];
        arr.push(...activity.countries, value)
        setActivity({ ...activity, countries: [...arr] })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(PostActivity(activity));

    }

    return (
        <form onSubmit={submitHandler}>
            <div className={style.allContainer}>
                <div className={style.container}>
                    <input type="text" id="name" name="name" onChange={handlerActivity} />

                    <span className={style.error}>{error.name}</span>
                    <div className={style.difficulty}>
                        <label name="difficulty">Difficulty:{activity.difficulty}</label>
                        <input type="range" id="difficulty" name="difficulty" min="1" max="5" step="1" onChange={handlerActivity} />
                    </div>


                    <div className={style.hours}>
                        <label name="hours">Hours: {activity.duration}</label>
                        <input type="range" id="hours" name="duration" min="1" max="24" step="1" onChange={handlerActivity} />
                        <span className={style.error}>{error.duration}</span>
                    </div>

                    <select onChange={handlerActivity} name="season">
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="autumn">Autumn</option>
                        <option value="winter">Winter</option>
                    </select>

                    <select onChange={handlerCombo} name="country">
                        <option>Select Country</option>
                        {countries?.map((e, index) => {
                            return <option key={index} value={e.name}>{e.name}</option>
                        })}
                    </select>

                    <select onChange={handlerCombo} name="country">
                        <option>Select Country</option>
                        {countries?.map((e, index) => {
                            return <option key={index} value={e.name}>{e.name}</option>
                        })}
                    </select>

                    <select onChange={handlerCombo} name="country">
                        <option>Select Country</option>
                        {countries?.map((e, index) => {
                            return <option key={index} value={e.name}>{e.name}</option>
                        })}
                    </select>

                    <div className={style.conteinerButton}>
                        <button className={style.button} type="submit">Submit</button>
                    </div>

                </div>
            </div>
        </form>
    )
}

export default Form;
