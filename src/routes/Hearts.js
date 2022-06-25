import { useState, useEffect } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';

export default function Hearts() {
   const [products, setProducts] = useState([]);
   const [inCart, setInCart] = useState(false);
   const [rerender, setRerender] = useState(false);

   useEffect(() => {
      fetch('http://localhost:3000/products')
         .then((r) => r.json())
         .then((data) => setProducts(data));
   }, [rerender]);

   return (
      <Container fluid align="center">
         <Row sm={1} md={2} lg={3}>
            {products
               .filter((product) => product.heart === true)
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
                              onClick={() =>
                                 fetch(
                                    `http://localhost:3000/products/${product.id}`,
                                    {
                                       method: 'PATCH',
                                       headers: {
                                          'Content-Type': 'application/json',
                                       },
                                       body: JSON.stringify({
                                          heart: !product.heart,
                                       }),
                                    }
                                 ).then(setRerender(!rerender))
                              }
                           >
                              {product.heart === false ? '♡' : '♥'}
                           </Card.Text>
                        </Container>
                        <Container className="d-flex justify-content-between">
                           <Card.Text>{product.price}</Card.Text>
                           <Button
                              variant="outline-secondary"
                              type="submit"
                              // onClick={(e) => handleSubmit(e)}
                           >
                              {inCart ? 'In Cart' : 'Add to Cart'}
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
