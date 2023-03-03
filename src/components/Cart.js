import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);
    return (
        <>
            <div className="tituloPrincipal"><h1>Tu Compra:</h1></div>
            <div className="cardFlexCarrito">
                {cart.map((product) => {
                    return (
                    <section className="cardHorizontal" id={`card-${product.id}`}>
                        <div className="cardText"><p id="carritoText">{product.producto}</p></div>
                        <div className="cardPrice"><p id="carritoPrice">{product.quantity}</p></div>
                        <div className="cardPrice"><p id="carritoPrice">{product.precio} USD</p></div>
                        <button className="cardCarritoButton" id={`button-${product.id}`} onClick={()=>removeItem(product.id)} >Quitar</button>
                    </section>
                    )
                })}
            </div>
        </>
    );
}

export default Cart;
