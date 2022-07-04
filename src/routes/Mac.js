import React, { useEffect, useContext } from 'react';
import { StateContext } from '../context';

export default function Mac() {
   const { setProducts, CardContainer } = useContext(StateContext);

   useEffect(() => {
      fetch('https://applecore2.herokuapp.com/products')
         .then((r) => r.json())
         .then((data) => setProducts(data));
   }, [setProducts]);

   return (
      <CardContainer
         keyword={'Mac'}
         mismatch={'iMac'}
         mismatch2={'MacBook Air'}
         mismatch3={'MacBook Pro'}
      />
   );
}
