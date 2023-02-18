import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const Header = () => {

  const [productos, setProductos] = useState([]);

  useEffect(()=> {

    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch("https://63bf5595e262345656e7882f.mockapi.io/Instrumentos");
        const data = await respuesta.json();
        setProductos(data)
      } 
      catch (error) {
        console.log('Fetch Error:', error);
      }
    }

    obtenerProductos();
  },[]);

  return (
    <header>
        <NavBar array={productos}/>
    </header>
  )
}

export default Header;
