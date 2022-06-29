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
                  <td>Name: </td>
                  <td>{`${first} ${last}`}</td>
               </tr>
               <tr>
                  <td>Address: </td>
                  <td>{`${street}`}</td>
               </tr>
               <tr>
                  <td></td>
                  <td>{`${city}, ${state} ${zip}`}</td>
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
