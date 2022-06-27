import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
   const [users, setUsers] = useState([]);
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [first, setFirst] = useState('');
   const [last, setLast] = useState('');
   const [street, setStreet] = useState('');
   const [city, setCity] = useState('');
   const [state, setState] = useState('');
   const [zip, setZip] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const navigate = useNavigate();

   function handleSubmit(e) {
      e.preventDefault();
      fetch('http://localhost:3000/users', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            id: uuid(),
            username,
            password,
            first,
            last,
            street,
            city,
            state,
            zip,
            email,
            phone,
         }),
      })
         .then((r) => r.json())
         .then((data) => setUsers([...users, data]))
         .then(navigate('./SignedUp'));
   }

   return (
      <div
         className="jumbotron jumbotron-fluid bg-white text-dark p-1"
         id="signupForm"
      >
         <br />
         <div className="container">
            <form>
               <p className="display-6 text-center">Sign Up</p>
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
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
               </div>
               <br />
               <div className="form-group row justify-content-center">
                  <label htmlFor="First" className="col-md-2 col-form-label">
                     First Name
                  </label>
                  <div className="col-md-4">
                     <input
                        type="text"
                        className="form-control"
                        id="First"
                        onChange={(e) => setFirst(e.target.value)}
                     />
                  </div>
               </div>
               <br />
               <div className="form-group row justify-content-center">
                  <label htmlFor="Last" className="col-md-2 col-form-label">
                     Last Name
                  </label>
                  <div className="col-md-4">
                     <input
                        type="text"
                        className="form-control"
                        id="Last"
                        onChange={(e) => setLast(e.target.value)}
                     />
                  </div>
               </div>
               <br />
               <div className="form-group row justify-content-center">
                  <label htmlFor="Street" className="col-md-2 col-form-label">
                     Street
                  </label>
                  <div className="col-md-4">
                     <input
                        type="text"
                        className="form-control"
                        id="Street"
                        onChange={(e) => setStreet(e.target.value)}
                     />
                  </div>
               </div>
               <br />
               <div className="form-group row justify-content-center">
                  <label htmlFor="City" className="col-md-2 col-form-label">
                     City
                  </label>
                  <div className="col-md-4">
                     <input
                        type="text"
                        className="form-control"
                        id="City"
                        onChange={(e) => setCity(e.target.value)}
                     />
                  </div>
               </div>
               <br />
               <div className="form-group row justify-content-center">
                  <label htmlFor="State" className="col-md-2 col-form-label">
                     State
                  </label>
                  <div className="col-md-4">
                     <input
                        type="text"
                        className="form-control"
                        id="State"
                        onChange={(e) => setState(e.target.value)}
                     />
                  </div>
               </div>
               <br />
               <div className="form-group row justify-content-center">
                  <label htmlFor="Zip" className="col-md-2 col-form-label">
                     Zip
                  </label>
                  <div className="col-md-4">
                     <input
                        type="text"
                        className="form-control"
                        id="Zip"
                        onChange={(e) => setZip(e.target.value)}
                     />
                  </div>
               </div>
               <br />
               <div className="form-group row justify-content-center">
                  <label htmlFor="Email" className="col-md-2 col-form-label">
                     Email
                  </label>
                  <div className="col-md-4">
                     <input
                        type="text"
                        className="form-control"
                        id="Email"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
               </div>
               <br />
               <div className="form-group row justify-content-center">
                  <label htmlFor="Phone" className="col-md-2 col-form-label">
                     Phone
                  </label>
                  <div className="col-md-4">
                     <input
                        type="text"
                        className="form-control"
                        id="Phone"
                        onChange={(e) => setPhone(e.target.value)}
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
            </form>
         </div>
      </div>
   );
}
