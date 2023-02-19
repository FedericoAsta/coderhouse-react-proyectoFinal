import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

const ItemDetailContainer = () => {  // Hace un FETCH y se trae solo el objeto que quiero buscar

  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams()

  useEffect(()=> {

    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch("https://63bf5595e262345656e7882f.mockapi.io/Instrumentos");
        const data = await respuesta.json();
        const filtroCategoria = data.filter((element) => element.id === id);
        id == undefined ? setProducto(data) : setProducto(filtroCategoria);
        setProducto(filtroCategoria)
        setLoading(true);
      } finally {
        setLoading(false);
      }
    }
    obtenerProductos();

  },[id]);

    return (
        <>
            {loading ? <h1>Cargando...</h1> : id == undefined ? producto.map((element,i)=> <ItemListContainer key={i} objeto={element} />) : producto.map((element,i)=> <ItemDetail key={i} objeto={element} />)}
        </>
    )
}

export default ItemDetailContainer;