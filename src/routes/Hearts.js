import React, { useEffect, useContext } from 'react';
import { StateContext } from '../context';
import { Container, Row } from 'react-bootstrap';

export default function Hearts() {
   const { products, setProducts, search, mode, CardInfo } =
      useContext(StateContext);

   useEffect(() => {
      fetch('https://applecore2.herokuapp.com/products')
         .then((r) => r.json())
         .then((data) => setProducts(data));
   }, [setProducts]);

   return (
      <Container fluid align="center">
         <br />
         {mode === 'light' ? (
            <p className="display-6 text-dark text-center">Favorites List</p>
         ) : (
            <p className="display-6 text-light text-center">Favorites List</p>
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
               .filter((product) => product.heart === true)
               .map((product) => (
                  <CardInfo product={product} />
               ))}
         </Row>
      </Container>
   );
}
