import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';


function App() { 
  return (
    <>
      <BrowserRouter>
        <CartProvider>
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
              path="/item/:id" 
              element={<ItemDetailContainer />} 
            />
          
            <Route 
              path="/cart" 
              element={<Cart />} 
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
