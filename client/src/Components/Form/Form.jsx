import React from "react";
import style from "./Form.module.css";

const Form = () => {

    return (
        <div className={style.allContainer}>
            <div className={style.container}>
                <select>
                    <option value="reset">Activity:</option>
                </select>

                <div className={style.difficulty}>
                    <label for="difficulty">Difficulty:</label>
                    <input type="range" id="difficulty" name="difficulty" min="1" max="5" step="1" />
                </div>

                <div className={style.hours}>
                    <label for="hours">Hours:</label>
                    <input type="range" id="hours" name="hours" min="1" max="24" step="1" />
                </div>

                <select>
                    <option value="">Spring</option>
                    <option value="">Summer</option>
                    <option value="">Autumn</option>
                    <option value="">Winter</option>
                </select>

                <div className={style.conteinerButton}>
                    <button className={style.button} type="submit">Submit</button>
                </div>

            </div>
        </div>
    )
}

export default Form;


{/* // Nombre.
// Dificultad.
// Duración.
// Temporada.
// Posibilidad de seleccionar/agregar varios países en simultáneo.
// Botón para crear la actividad turística.

// ID. *
// Nombre. *
// Dificultad (número del 1 al 5). *
// Duración (en horas).
// Temporada (Verano, Otoño, Invierno o Primavera). * */}