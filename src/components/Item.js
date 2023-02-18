import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {  
    return (
        <>
            <section className="card" id={producto.id}>
                <div className="cardImg"><img src={producto.imagen} alt={producto.descripcion} /></div>
                <div className="cardText"><p>{producto.producto}</p></div>
                <div className="cardPrice"><p>{producto.precio} USD</p></div>
                <Link className="link" to={`/product/${producto.id}`}><button className="cardCarrito" id={`button-${producto.id}`}><p>Añadir al carrito</p></button></Link>
            </section>
        </>
    )
}

export default Item;