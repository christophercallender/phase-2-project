import React, { useEffect, useContext } from 'react';
import { StateContext } from '../context';

export default function AppleCore() {
   const { setProducts, CardContainer } = useContext(StateContext);

   useEffect(() => {
      fetch('https://applecore2.herokuapp.com/products')
         .then((r) => r.json())
         .then((data) => setProducts(data.sort((a, b) => a.title < b.title)));
   }, [setProducts]);

   return <CardContainer keyword={''} />;
}
