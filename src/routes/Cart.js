import React, { useState, useEffect, useContext } from 'react';
import { StateContext } from '../context';
import { Container, Card, Col, Row } from 'react-bootstrap';
import amazonbutton from '../media/amazonbutton.png';
import deletebutton from '../media/deletebutton.png';

export default function Cart() {
   const { products, setProducts, search, mode, handleHeart, handleCart } =
      useContext(StateContext);

   useEffect(() => {
      fetch('https://applecore2.herokuapp.com/products')
         .then((r) => r.json())
         .then((data) => setProducts(data));
   }, []);

   return (
      <Container fluid align="center">
         <br />
         {mode === 'light' ? (
            <p className="display-6 text-dark text-center">Shopping Cart</p>
         ) : (
            <p className="display-6 text-light text-center">Shopping Cart</p>
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
               .filter((product) => product.inCart === true)
               .map((product) => (
                  <Col key={product.id}>
                     <Card style={{ width: '18rem', padding: '10px' }}>
                        <Card.Img
                           src={product.image}
                           alt={product.title + product.model}
                        />
                        <br />
                        <Container className="d-flex justify-content-between">
                           <Card.Text>{product.price}</Card.Text>
                           <Card.Title>{product.title}</Card.Title>
                           <Card.Text>{product.model}</Card.Text>
                           <Card.Text
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleHeart(product)}
                           >
                              {product.heart ? '♥' : '♡'}
                           </Card.Text>
                        </Container>
                        <Container className="d-flex justify-content-between">
                           <button
                              style={{
                                 border: 'none',
                                 background: 'none',
                              }}
                              onClick={() => handleCart(product)}
                           >
                              <img
                                 src={deletebutton}
                                 alt="delete button"
                                 width="100%"
                              />
                           </button>
                           <button
                              style={{
                                 border: 'none',
                                 background: 'none',
                              }}
                              href={`https://www.amazon.com/s?k=${
                                 product.title + product.model
                              }`}
                              target="_blank"
                              rel="noreferrer"
                           >
                              <img
                                 src={amazonbutton}
                                 alt="amazon button"
                                 width="100%"
                              />
                           </button>
                        </Container>
                     </Card>
                     <br />
                  </Col>
               ))}
         </Row>
      </Container>
   );
}
