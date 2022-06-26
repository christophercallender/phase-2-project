import { useState, useEffect } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';

export default function Price() {
   const [products, setProducts] = useState([]);
   const [rerender, setRerender] = useState(false);

   useEffect(() => {
      fetch('http://localhost:3000/products')
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
         <br />
         <p className="display-6 text-center">Sorted By Price</p>
         <br />
         <Row sm={1} md={2} lg={3}>
            {products.map((product) => (
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
                              product.inCart ? 'secondary' : 'outline-secondary'
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
