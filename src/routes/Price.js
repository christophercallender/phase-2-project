import React, { useEffect, useContext } from 'react';
import { StateContext } from '../context';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';

export default function Price() {
   const { products, setProducts, search, mode, CardInfo } =
      useContext(StateContext);

   useEffect(() => {
      fetch('https://applecore2.herokuapp.com/products')
         .then((r) => r.json())
         .then((data) =>
            setProducts(
               data.sort(
                  (a, b) =>
                     a.price.substring(1).replace(',', '') -
                     b.price.substring(1).replace(',', '')
               )
            )
         );
   }, [setProducts]);

   return (
      <Container fluid align="center">
         <br />
         {mode === 'light' ? (
            <p className="display-6 text-dark text-center">Sorted By Price</p>
         ) : (
            <p className="display-6 text-light text-center">Sorted By Price</p>
         )}
         <br />
         <Row sm={1} md={2} lg={3}>
            {products
               .filter(
                  (product) =>
                     product.title
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                     product.model.toLowerCase().includes(search.toLowerCase())
               )
               .map((product) => (
                  <CardInfo product={product} />
               ))}
         </Row>
      </Container>
   );
}
