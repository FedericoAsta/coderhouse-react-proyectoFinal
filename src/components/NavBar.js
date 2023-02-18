import React from 'react'
import logo from '../assets/img/pngwing.com.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'


const NavBar = ({array}) => {  

    const arrayDeCategorias = array.map((element) => element.categoria);
    const categoriasSinDuplicados = arrayDeCategorias.filter((item,index) => {
        return arrayDeCategorias.indexOf(item) === index;
    })

    return (
        <div className="flexNavBar">
            <div className="logo"><img className="logoImagen" src={logo} alt="Logo FV Guitars" /><Link className="link" to={'/'}>FV Guitars</Link></div>
            <nav>
                <ul className="navBar">
                    {categoriasSinDuplicados.map((element,index) => <li key={index}><Link className="link" to={`/categorias/${element}`}>{element}</Link></li>)}
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </div>
        )
}

export default NavBar;
