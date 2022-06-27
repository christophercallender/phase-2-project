import { Container } from 'react-bootstrap';

export default function SignedIn({ first }) {
   return (
      <Container fluid align="center">
         <br />
         <p className="display-6 text-center">
            You have successfully signed in!
         </p>
         <br />
         <h2 className=" text-center">Welcome back, {first}!</h2>
         <br />
      </Container>
   );
}
