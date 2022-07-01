import React, { useEffect, useContext } from 'react';
import { StateContext } from '../context';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';

export default function TVandHome() {
   const { products, setProducts, search, handleHeart, handleCart } =
      useContext(StateContext);

   useEffect(() => {
      fetch('https://applecore2.herokuapp.com/products')
         .then((r) => r.json())
         .then((data) => setProducts(data));
   }, []);

   return (
      <Container fluid align="center">
         <Row sm={1} md={2} lg={3}>
            {products
               .filter(
                  (product) =>
                     product.title
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                     product.model.toLowerCase().includes(search.toLowerCase())
               )
               .filter(
                  (product) =>
                     product.title.includes('TV') ||
                     product.title.includes('Home')
               )
               .map((product) => (
                  <Col key={product.id}>
                     <Card style={{ width: '18rem', padding: '10px' }}>
                        <Card.Img
                           src={product.image}
                           alt={product.title + product.model}
                        />
                        <br />
                        <Container className="d-flex justify-content-between">
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
                           <Card.Text>{product.price}</Card.Text>
                           <Button
                              variant={
                                 product.inCart
                                    ? 'secondary'
                                    : 'outline-secondary'
                              }
                              onClick={() => handleCart(product)}
                           >
                              {product.inCart ? 'In Cart' : 'Add to Cart'}
                           </Button>
                        </Container>
                     </Card>
                     <br />
                  </Col>
               ))}
         </Row>
      </Container>
   );
}
