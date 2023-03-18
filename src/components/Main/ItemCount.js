import React, { useState } from 'react';

const ItemCount = ({onAdd, stock}) => {

    const [count, setCount] = useState(1);

    const sumarProducto = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const restarProducto = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <div className="itemCountContainer">
                <div className="productButtonSmall" onClick={()=> restarProducto()}>-</div>
                <h2>{count}</h2>
                <div className="productButtonSmall" onClick={()=> sumarProducto()}>+</div>
                <div className="productButton" onClick={()=> onAdd(count)}>Agregar al carrito</div>
            </div>
        </>
    )
}

export default ItemCount;