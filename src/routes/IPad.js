import React, { useEffect, useContext } from 'react';
import { StateContext } from '../context';

export default function IPad() {
   const { setProducts, CardContainer } = useContext(StateContext);

   useEffect(() => {
      fetch('https://applecore2.herokuapp.com/products')
         .then((r) => r.json())
         .then((data) => setProducts(data));
   }, [setProducts]);

   return <CardContainer keyword={'iPad'} />;
}
