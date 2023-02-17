import React from 'react'
import logo from '../assets/img/pngwing.com.png';
import CartWidget from './CartWidget';


const NavBar = () => {  // Acá tengo que hacer un map y traerme las categorías de los distintos productos y ponerlas en la navbar. 
  return (
    <div className="flexNavBar">
        <div className="logo"><img className="logoImagen" src={logo} alt="Logo FV Guitars" /><a href="">FV Guitars</a></div>
        <nav>
            <ul className="navBar">
                <li><a href="">Productos</a></li>
                <li><a href="">Carrito</a></li>
                <li><a href="">Contacto</a></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar;
