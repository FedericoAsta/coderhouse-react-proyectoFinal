import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount';
import {CartContext} from '../context/CartContext';


const ItemDetail = ({objeto}) => {  // Imprime en la pantalla el código del detalle del producto con el objeto que obtiene Item Detail Container

    const [botonApretado, setBotonApretado] = useState(false);
    const { addItem } = useContext(CartContext);

    const onAdd = (count) => {
        setBotonApretado(true);
        addItem(objeto, count);
    }

    return (
        <>
            <section className="product">
                <div className="productPhoto"><img src={objeto.imagen} alt={objeto.producto} /></div>
                <div className="productSpecs">
                    <div className="productTitle"><p>{objeto.producto}</p></div>
                    <div className="productSubtitle"><p>{objeto.descripcion}</p></div>
                    <div className="productFlex">
                        <div className="productPrice"><p>{`US$ ${objeto.precio}`}</p></div>
                        {botonApretado ? (
                            <div className="productButton"><Link to={'/cart'}><p>Finalizar Compra</p></Link></div>
                        ) : (  
                            <ItemCount onAdd={onAdd} />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ItemDetail;

