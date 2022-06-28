import React, { useContext } from 'react';
import { StateContext } from '../context';
import { Table } from 'react-bootstrap';

export default function SignedUp() {
   const {
      username,
      first,
      last,
      street,
      city,
      state,
      zip,
      email,
      phone,
      mode,
   } = useContext(StateContext);

   return (
      <div
         className={
            mode === 'light'
               ? 'jumbotron jumbotron-fluid bg-white text-dark p-1'
               : 'jumbotron jumbotron-fluid bg-black text-light p-1'
         }
         id="signupForm"
      >
         <br />
         <p className="display-6 text-center">
            You have successfully signed up!
         </p>
         <br />
         <Table
            style={{
               width: '25%',
               margin: 'auto',
               color: mode === 'light' ? 'black' : 'white',
               borderColor: mode === 'light' ? 'white' : 'black',
            }}
         >
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
   );
}
