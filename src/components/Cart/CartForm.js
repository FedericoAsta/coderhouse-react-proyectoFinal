import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { Link } from 'react-router-dom'


const CartForm = () => {

  const { clear, cart, total } = useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [mail, setMail] = useState("");
  const [fin, setFin] = useState(false);
  const [orderID, setOrderID] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    setFin(true);

    stockReduction();

    const ordersCollection = collection(db, 'orders');
    addDoc(
      ordersCollection,
      {
        nombre: nombre,
        direccion: direccion,
        mail: mail,
        productos: cart,
        total: total,
        time: serverTimestamp(),
      }
    )
    .then((order)=>{
      setOrderID(order.id);
    })
  }

  const stockReduction = () => {
    cart.forEach((element) => {
      const documento = doc(db, 'products', element.id)
      if (element.stock < element.quantity) {
        console.log("No hay stock suficiente")
      } else {
        updateDoc(documento, {stock: element.stock - element.quantity})
      }
    })
  }

  const handlerClear = () => {
    clear();
  }

  return (
    <>
      {fin == false ?
      <div className="contactFlex">
        <div className="contactBox">
          <div className="contactInfo">
            <h1>Finalizar Compra</h1>
            <p className="contactSubtitulo">Deja tus datos acá para completar la compra:</p>
          </div>
          <div className="contactForm"> 
            <form method="post" onSubmit={handlerSubmit}>
                <label><h2 id="formTitle">Nombre</h2></label>
                <input type="text" id="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="Escribí acá tu nombre completo" />
                <label><h2 id="formTitle">Dirección</h2></label>
                <input type="text" id="direccion" value={direccion} onChange={(e)=>setDireccion(e.target.value)} placeholder="Escribí acá tu dirección de envío" />
                <label><h2 id="formTitle">E-mail</h2></label>
                <input type="text" id="mail" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder="Escribí acá tu correo electrónico" />
                <input className="buttonForm" type="submit" value="COMPRAR" />
            </form>
          </div>
        </div>
      </div>
      :
      <div className="test">
        <div className="contactInfo2">
          <h1>Gracias por tu compra!</h1>
          <p>En breve nos estaremos comunicando con vos. El ID de tu pedido es:</p><p style={{color: 'rgb(49, 224, 128)'}}>{orderID}</p> 
          <Link className="link" to={'/'}><button className="cardCarritoButton2" onClick={handlerClear} >Volver al inicio</button></Link>
        </div>
      </div>
      }
    </>
  )
}

export default CartForm;