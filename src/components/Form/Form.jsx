import React, { useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { useContext } from 'react';
import { Context } from '../Cart/CartContext';
import { useEffect } from 'react';

const ContactForm = () => {
  const { carrito, total } = useContext(Context);
  const [id, setId] = useState();
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    setPrecioTotal(total());        // eslint-disable-next-line
  }, [id]);

  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const changeHandler = (event) => {
    const newForm = { ...form, [event.target.name]: event.target.value };
    setForm(newForm);
  };

  const submitHandler = (event) => {

    const purchase = {
      buyer: form,
      items: carrito,
      total: precioTotal,
      date: new Date().toLocaleString()
    };

    event.preventDefault();

    const db = getFirestore();
    const pucharseFormCollection = collection(db, 'pucharseform');
    addDoc(pucharseFormCollection, purchase).then((snapshot) => setId(snapshot.id));
  };

  return (
    <div>
      {typeof id !== 'undefined' ? (
        <p>Hemos procesado tu compra, la id de tu pedido es: {id}</p>
      ) : (
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              name="name"
              id="name"
              placeholder="Tu Nombre"
              onChange={changeHandler}
              value={form.name}
            />
          </div>
          <br />
          <div>
            <label htmlFor="lastName">Apellido</label>
            <input
              name="lastName"
              id="lastName"
              placeholder="Tu apellido"
              onChange={changeHandler}
              value={form.lastName}
            />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              onChange={changeHandler}
              value={form.email}
            />
          </div>
          <br />
          <div>
            <label htmlFor="phone">telefono</label>
            <input
              name="phone"
              id="phone"
              placeholder="+569 0000 0000"
              onChange={changeHandler}
              value={form.phone}
            ></input>
          </div>
          <br />
          <button>Enviar</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
