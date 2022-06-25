import { Container, Table } from 'react-bootstrap';

export default function SignedUp({
   username,
   first,
   last,
   street,
   city,
   state,
   zip,
   email,
   phone,
}) {
   return (
      <Container fluid align="center">
         <h1>You have successfully signed up!</h1>
         <br />
         <div style={{ width: '25%', textAlign: 'left' }}>
            <Table className="border-white">
               <tbody>
                  <tr>
                     <td>Username: </td>
                     <td>{`${username}`}</td>
                  </tr>
                  <tr>
                     <td>First: </td>
                     <td>{`${first}`}</td>
                  </tr>
                  <tr>
                     <td>Last: </td>
                     <td>{`${last}`}</td>
                  </tr>
                  <tr>
                     <td>Street: </td>
                     <td>{`${street}`}</td>
                  </tr>
                  <tr>
                     <td>City: </td>
                     <td>{`${city}`}</td>
                  </tr>
                  <tr>
                     <td>State: </td>
                     <td>{`${state}`}</td>
                  </tr>
                  <tr>
                     <td>Zip: </td>
                     <td>{`${zip}`}</td>
                  </tr>
                  <tr>
                     <td>Email: </td>
                     <td>{`${email}`}</td>
                  </tr>
                  <tr>
                     <td>Phone: </td>
                     <td>{`${phone}`}</td>
                  </tr>
               </tbody>
            </Table>
         </div>
      </Container>
   );
}
