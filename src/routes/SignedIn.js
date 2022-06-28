import React, { useContext } from 'react';
import { StateContext } from '../context';

export default function SignedIn({ first }) {
   const { mode } = useContext(StateContext);

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
         <h2 className=" text-center">Welcome back, {first}!</h2>
         <br />
      </div>
   );
}
