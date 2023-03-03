import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        let cantidadActual = 0;
        cart.forEach((product) => {
        cantidadActual += product.quantity;
        });
        setQuantity(cantidadActual);
    }, [cart]);

    const addItem = (product, productQuantity) => {
        if (isInCart(product.id)) {
        //HACER LOGICA
        } else {
        setCart([...cart, { ...product, quantity: productQuantity }]);
        setQuantity(quantity + productQuantity)
        }
    };

    const removeItem = (id) => {
        const product = cart.find((product) => product.id === id);
        setCart(cart.filter((product) => product.id !== id));
        setQuantity(quantity - product.quantity)
    };

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    const clear = () => {
        setCart([]);
        setQuantity(0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, quantity }}>
        {children}
        </CartContext.Provider>
    );
    };
