import React from 'react'

const Item = () => {  // Toma la información de ItemList e imprime las cards
    return (
        <>
            <section class="card" id="${element.id}">
                <div class="cardImg"><img src="${element.imagen}" alt="${element.descripcion}" /></div>
                <div class="cardText"><p>"$element.producto"</p></div>
                <div class="cardPrice"><p>"$element.precio USD"</p></div>
                <button class="cardCarrito" id="button-${element.id}"><p>Añadir al carrito</p></button>
            </section>
        </>
    )
}

export default Item;