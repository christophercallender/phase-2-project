import React, { useContext, useEffect } from 'react';
import { StateContext } from '../context';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
   const {
      username,
      setUsername,
      setCurrentUser,
      password,
      setPassword,
      rerender,
      mode,
   } = useContext(StateContext);
   const navigate = useNavigate();

   useEffect(() => {
      setUsername('');
      setPassword('');
   }, [rerender]);

   function handleSubmit(e) {
      e.preventDefault();
      fetch(`http://localhost:3000/status/1`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            currentUser: username,
         }),
      })
         .then((r) => r.json())
         .then((data) => setCurrentUser(data.currentUser))
         .then(navigate('/routes/SignedIn'));
   }

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
         <div className="container">
            <form>
               <p className="display-6 text-center">Sign In</p>
               <br />
               <div className="form-group row justify-content-center">
                  <label htmlFor="Username" className="col-md-2 col-form-label">
                     Username
                  </label>
                  <div className="col-md-4">
                     <input
                        type="text"
                        className="form-control"
                        id="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </div>
               </div>
               <br />
               <div className="form-group row justify-content-center">
                  <label htmlFor="Password" className="col-md-2 col-form-label">
                     Password
                  </label>
                  <div className="col-md-4">
                     <input
                        type="Password"
                        className="form-control"
                        id="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
               </div>
               <br />
               <div className="form-group row justify-content-center">
                  <label
                     htmlFor="Submit"
                     className="col-md-2 col-form-label"
                  ></label>
                  <div className="col-md-4">
                     <button
                        type="submit"
                        className="btn btn-outline-secondary"
                        onClick={(e) => handleSubmit(e)}
                     >
                        Submit
                     </button>
                  </div>
               </div>
               <br />
               <br />
            </form>
         </div>
      </div>
   );
}
