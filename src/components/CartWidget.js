import React from 'react'
import CarritoImg from '../assets/img/carrito.png'
import { Link } from 'react-router-dom'

const productosCarrito = 0;

const CartWidget = () => {
  return (
    <div className="carritoNav">
        <Link className="link" to={'/cart'}><img src={CarritoImg} alt="" /></Link>
        <div className="cantidadCarrito">{productosCarrito}</div>
    </div>
  )
}

export default CartWidget;