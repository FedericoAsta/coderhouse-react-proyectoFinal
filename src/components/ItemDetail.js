import React from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({objeto}) => {  // Imprime en la pantalla el código del detalle del producto con el objeto que obtiene Item Detail Container
    return (
        <>
            <section className="product">
                <div className="productPhoto"><img src={objeto.imagen} alt={objeto.producto} /></div>
                <div className="productSpecs">
                    <div className="productTitle"><p>{objeto.producto}</p></div>
                    <div className="productSubtitle"><p>{objeto.descripcion}</p></div>
                    <div className="productFlex">
                        <div className="productPrice"><p>{`US$ ${objeto.precio}`}</p></div>
                        <div className="productButton"><Link to={'/cart'}><p>Comprar</p></Link></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ItemDetail;