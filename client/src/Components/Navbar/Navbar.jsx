import SearchBar from "./SearchBar";
import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../Redux/action";

const Navbar = () => {
    const dispatch = useDispatch()
    const FilterCountry = useSelector(state => state.CountriesFill)
    const OrderCountry = (event) => {
        dispatch(Filter(event.target.value))
    }
    console.log(FilterCountry)

    return (
        <div>
            <div className={style.nav}>
                <Link to="/" />
                <Link to="/home" className={style.home}>Home</Link>
                <Link to="/form" className={style.form}>Form</Link>
            </div>
            <select onChange={OrderCountry}>
                <option>Select</option>
                <option value="a">Ascendente</option>
                <option value="d">Descendente</option>
            </select>
        </div>
    );
};

export default Navbar;




// export default function Nav({ onSearch }) {
//     <div>
//         <SearchBar onSearch={onSearch} />
//     </div>

// }