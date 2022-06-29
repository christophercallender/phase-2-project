import React, { useContext } from 'react';
import { StateContext } from '../context';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignedIn() {
   const { currentUser, mode } = useContext(StateContext);

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
            You have successfully signed in!
         </p>
         <br />
         <h2 className=" text-center">Welcome back, {currentUser}!</h2>
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
      </div>
   );
}
