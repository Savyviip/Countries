import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../Redux/action";

const Navbar = () => {
    const dispatch = useDispatch()
    

    return (
        <div>
            <div className={style.nav}>
                <Link to="/" />
                <Link to="/home" className={style.home}>Home</Link>
                <Link to="/form" className={style.form}>Form</Link>
            </div>
        </div>
    );
};

export default Navbar;




// export default function Nav({ onSearch }) {
//     <div>
//         <SearchBar onSearch={onSearch} />
//     </div>

// }