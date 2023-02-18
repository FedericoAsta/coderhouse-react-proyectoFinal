import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';


function App() { 
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<ItemListContainer greeting="Bienvenido a FV Guitars" />} 
          />
        
          <Route 
            path="/categorias/:name" 
            element={<ItemListContainer greeting="Bienvenido a FV Guitars" />} 
          />
        
          <Route 
            path="/product/:id" 
            element={<ItemListContainer greeting="Bienvenido a FV Guitars" />} 
          />
        
          <Route 
            path="/cart" 
            element={<Cart />} 
          />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
