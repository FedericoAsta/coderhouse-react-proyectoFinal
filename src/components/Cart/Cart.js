import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'
import CartForm from "./CartForm";

const Cart = () => {
    const { cart, removeItem, total } = useContext(CartContext);
    const [finalizar, setFinalizar] = useState(false);

    const handlerForm = () => {
        setFinalizar(true);
    }

    return (
        <>
            {total == 0 ? 
                <>
                    <div id="totalCarrito">  
                        <div className="cardFlexCarrito" id="tarjetaTotal">
                            <section className="cardHorizontal" id="totalizador">
                                <div className="cardText"><p id="totalCarritoText">Carrito Vacío</p></div>
                                <Link className="link" to={'/'}><div className="cardPrice"><p id="totalCarritoPrice">Ver Productos</p></div></Link>
                            </section>
                        </div>
                    </div>
                </> :
                <>
                    <div className="tituloPrincipal"><h1>{!finalizar ? "Tu Compra:" : "Resumen de la compra"}</h1></div>
                    <div className="cardFlexCarrito">
                        {cart.map((product) => {
                            return (
                            <section className="cardHorizontal" key={`card-${product.id}`}>
                                <div className="cardText"><p id="carritoText">{product.producto}</p></div>
                                <div className="cardPrice"><p id="carritoPrice">{product.quantity}</p></div>
                                <div className="cardText"><p>X</p></div>
                                <div className="cardPrice"><p id="carritoPrice">{product.precio} USD</p></div>
                                {!finalizar && <button className="cardCarritoButton" id={`button-${product.id}`} onClick={()=>removeItem(product.id)} >Quitar</button>}
                            </section>
                            )
                        })}
                    </div>
                    <div id="totalCarrito">  
                        <div className="cardFlexCarrito" id="tarjetaTotal">
                            <section className="cardHorizontal" id="totalizador">
                                <div className="cardText"><p id="totalCarritoText">TOTAL:</p></div>
                                <div className="cardPrice"><p id="totalCarritoPrice">{total} USD</p></div>
                                <button className="cardCarritoButton2" onClick={handlerForm} >Finalizar Compra</button>
                            </section>
                        </div>
                    </div>
                    {finalizar && <CartForm />}
                </>
            }
        </>
    );
}

export default Cart;
