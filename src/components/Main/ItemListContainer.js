import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => { 

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {name} = useParams()

  useEffect(()=> {

    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch("https://63bf5595e262345656e7882f.mockapi.io/Instrumentos");
        const data = await respuesta.json();
        const filtroCategoria = data.filter((element) => element.categoria === name);
        name == undefined ? setProductos(data) : setProductos(filtroCategoria);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    }
    obtenerProductos();

  },[name]);


  return (
    <>
      {<>{loading ? <h1>Cargando...</h1> : 
        <>
          <div className="tituloPrincipal"><h1>{greeting}</h1></div>
          <ItemList array={productos} />
        </>
        }
        </>
      }
    </>
  )
}

export default ItemListContainer;