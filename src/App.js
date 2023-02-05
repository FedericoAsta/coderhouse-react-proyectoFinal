import './App.css';
import React from 'react';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';


function App() { // Acá adentro tiene que ir NAVBAR (que adentro tiene CartWidget) y abajo ITEMLISTCONTAINER con el mensaje de bienvenida
  return (
    <>
    <Header />
    <ItemListContainer greeting="Bienvenido a FV Guitars"/>
    </>
  );
}

export default App;
