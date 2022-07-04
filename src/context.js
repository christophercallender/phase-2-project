import { useState, createContext } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';

const StateContext = createContext();

function StateProvider({ children }) {
   const [products, setProducts] = useState([]);
   const [search, setSearch] = useState('');
   const [mode, setMode] = useState('light');

   const [users, setUsers] = useState([]);
   const [first, setFirst] = useState('');
   const [last, setLast] = useState('');
   const [street, setStreet] = useState('');
   const [city, setCity] = useState('');
   const [state, setState] = useState('');
   const [zip, setZip] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');

   const [username, setUsername] = useState('');
   const [currentUser, setCurrentUser] = useState('');
   const [password, setPassword] = useState('');

   function handleHeart(product) {
      fetch(`https://applecore2.herokuapp.com/products/${product.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            heart: !product.heart,
         }),
      })
         .then((r) => r.json())
         .then((data) => {
            setProducts(
               products.map((product) => {
                  return product.id === data.id
                     ? { ...product, heart: data.heart }
                     : product;
               })
            );
         });
   }

   function handleCart(product) {
      fetch(`https://applecore2.herokuapp.com/products/${product.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            inCart: !product.inCart,
         }),
      })
         .then((r) => r.json())
         .then((data) => {
            setProducts(
               products.map((product) => {
                  return product.id === data.id
                     ? { ...product, inCart: data.inCart }
                     : product;
               })
            );
         });
   }

   function CardInfo({ product }) {
      return (
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
                     onClick={() => handleCart(product)}
                  >
                     {product.inCart ? 'In Cart' : 'Add to Cart'}
                  </Button>
               </Container>
            </Card>
            <br />
         </Col>
      );
   }

   function CardContainer({
      keyword,
      keyword2,
      mismatch,
      mismatch2,
      mismatch3,
   }) {
      return (
         <Container fluid align="center">
            <Row sm={1} md={2} lg={3}>
               {products
                  .filter(
                     (product) =>
                        product.title
                           .toLowerCase()
                           .includes(search.toLowerCase()) ||
                        product.model
                           .toLowerCase()
                           .includes(search.toLowerCase())
                  )
                  .filter(
                     (product) =>
                        (product.title.includes(keyword) ||
                           product.title.includes(keyword2)) &&
                        product.title !== mismatch &&
                        product.title !== mismatch2 &&
                        product.title !== mismatch3
                  )
                  .map((product) => (
                     <CardInfo product={product} />
                  ))}
            </Row>
         </Container>
      );
   }

   return (
      //<SearchContext.Provider value={{ state, setState, function(s) }}>
      <StateContext.Provider
         value={{
            handleHeart,
            handleCart,
            CardInfo,
            CardContainer,
            products,
            setProducts,
            search,
            setSearch,
            mode,
            setMode,
            users,
            setUsers,
            username,
            setUsername,
            currentUser,
            setCurrentUser,
            password,
            setPassword,
            first,
            setFirst,
            last,
            setLast,
            street,
            setStreet,
            city,
            setCity,
            state,
            setState,
            zip,
            setZip,
            email,
            setEmail,
            phone,
            setPhone,
         }}
      >
         {children}
      </StateContext.Provider>
   );
}

export { StateContext, StateProvider };
