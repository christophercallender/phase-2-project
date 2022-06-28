import React, { useState, useEffect, useContext } from 'react';
import { StateContext } from '../context';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import amazonbutton from '../media/amazonbutton.png';

export default function Cart() {
   const [products, setProducts] = useState([]);
   const { search, mode, handleHeart, handleAddToCart, rerender } =
      useContext(StateContext);

   useEffect(() => {
      fetch('http://localhost:3000/products')
         .then((r) => r.json())
         .then((data) => setProducts(data));
   }, [rerender]);

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
                           <Button
                              variant={'white'}
                              onClick={() => handleAddToCart(product)}
                           >
                              {product.inCart ? 'Remove' : 'Add to Cart'}
                           </Button>
                           <a
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
                           </a>
                        </Container>
                     </Card>
                     <br />
                  </Col>
               ))}
         </Row>
      </Container>
   );
}
