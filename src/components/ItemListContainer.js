import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => { // Este va a hacer el FETCH y se lo va a mandar a item list.
  return (
    <>
      <div className="tituloPrincipal"><h1>{greeting}</h1></div>
      <ItemList array="instrumentos"/>
    </>
  )
}

export default ItemListContainer;
