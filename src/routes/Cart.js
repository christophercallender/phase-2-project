import { useState, useEffect } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';

export default function Cart() {
   const [products, setProducts] = useState([]);
   const [rerender, setRerender] = useState(false);

   useEffect(() => {
      fetch('http://localhost:3000/products')
         .then((r) => r.json())
         .then((data) => setProducts(data));
   }, [rerender]);

   function handleHeart(product) {
      fetch(`http://localhost:3000/products/${product.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            heart: !product.heart,
         }),
      }).then(setRerender(!rerender));
   }

   function handleAddToCart(product) {
      fetch(`http://localhost:3000/products/${product.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            inCart: !product.inCart,
         }),
      }).then(setRerender(!rerender));
   }

   return (
      <Container fluid align="center">
         <Row sm={1} md={2} lg={3}>
            {products
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
                                    ? 'primary'
                                    : 'outline-secondary'
                              }
                              onClick={() => handleAddToCart(product)}
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