// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { searchCountries } from "../../Redux/action";
// import { Link } from "react-router-dom";



// const SearchBar = () => {
//     const [name, setName] = useState("");
//     const dispatch = useDispatch();  // patea la accion, despacha
//     // const navigate = useNavigate();

//     const handleChange = (event) => { setName(event.target.value); };

//     // function submit() {
//     //     onSearch(name)
//     //     navigate("/home")  me manda al home para buscar el pais
//     // }

//     return (
//         <div>
//             <input/>

//             <Link to="/home">
//                 <button className={style.styleButton} onClick={() => dispatch(searchCountries(name))}>Search</button>
//             </Link>
//         </div>
//     );
// }

// export default SearchBar