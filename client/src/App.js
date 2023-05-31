import './App.css';
import axios from "axios";
import { useDispatch } from 'react-redux';
// import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Cards from "./Components/Cards";
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import Nav from './Components/Navbar/Nav';


function App() {
  const location = useLocation();

  // const info = async () => {
  //   const api = (await axios.get("http://localhost:3001/countries")).data
  // }
  // info();


  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Routes >
        <Route patch='/' element={<Navbar></Navbar>}></Route>
        <Route path='/' element={<Landing></Landing>}> </Route>
        <Route path='/home' element={<Cards></Cards>}></Route>
        {/* <Route path="/home" component={CustomButton}
        <Route path='/detail/:id' element={<Detail />} /> */}
        <Route path='/form' element={<Form />} />
      </Routes>

      {/* pais={paises} onClose={onClose} */}
    </div>
  );
}

export default App;
