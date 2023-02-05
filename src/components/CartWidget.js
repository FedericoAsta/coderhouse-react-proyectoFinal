import React from 'react'
import CarritoImg from '../assets/img/carrito.png'

const productosCarrito = 0;

const CartWidget = () => {
  return (
    <div className="carritoNav">
        <a href=''><img src={CarritoImg} alt="" /></a>
        <div className="cantidadCarrito">{productosCarrito}</div>
    </div>
  )
}

export default CartWidget;