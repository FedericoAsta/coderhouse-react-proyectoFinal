import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';




function App() { 
  return (
    <>
      <BrowserRouter>
        <Header />
        <ItemListContainer greeting="Bienvenido a FV Guitars"/>
        
      </BrowserRouter>
    </>
  );
}

export default App;
