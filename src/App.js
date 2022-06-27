import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import applecore from './media/Apple Core.png';
import applecoregif from './media/Apple Core.gif';
import applecoregifdark from './media/Apple Core dark.gif';
import cartgray from './media/cartgray.png';
import cartwhite from './media/cartwhite.png';
import buttondark from './media/buttondark.png';
import buttonlight from './media/buttonlight.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';

export default function App() {
   const [search, setSearch] = useState('');
   const [mode, setMode] = useState('light');
   const navigate = useNavigate();
   const navStyle = ({ isActive }) => isActive
         ? {color: 'white', textDecoration: 'none', margin: '10px'}
         : {color: 'gray', textDecoration: 'none', margin: '10px'}; //prettier-ignore

   useEffect(() => {
      if (window.location.pathname === '/') {
         navigate('/routes/AppleCore');
      }
   });

   return (
      <div
         style={{
            background: mode === 'light' ? 'white' : 'black',
         }}
      >
         <Navbar bg="dark" expand="sm-md-lg">
            <Container>
               <NavLink to="/routes/AppleCore">
                  <img src={applecore} width={20} alt={'apple core logo'} />
               </NavLink>
               &nbsp;
               <NavLink style={navStyle} to="/routes/Mac">
                  Mac
               </NavLink>
               <NavLink style={navStyle} to="/routes/IMac">
                  iMac
               </NavLink>
               <NavLink style={navStyle} to="/routes/MacBook">
                  MacBook
               </NavLink>
               <NavLink style={navStyle} to="/routes/IPad">
                  iPad
               </NavLink>
               <NavLink style={navStyle} to="/routes/IPhone">
                  iPhone
               </NavLink>
               <NavLink style={navStyle} to="/routes/Watch">
                  Watch
               </NavLink>
               <NavLink style={navStyle} to="/routes/AirPods">
                  AirPods
               </NavLink>
               <NavLink style={navStyle} to="/routes/TVandHome">
                  TV & Home
               </NavLink>
               <NavLink style={navStyle} to="/routes/SignUp">
                  Sign Up
               </NavLink>
               <NavLink style={navStyle} to="/routes/SignIn">
                  Sign In
               </NavLink>
               &nbsp;
               <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
               />
               &nbsp;
               <NavLink style={navStyle} to="/routes/Price">
                  $
               </NavLink>
               <NavLink style={navStyle} to="/routes/Hearts">
                  ♥
               </NavLink>
               <NavLink style={navStyle} to="/routes/Cart">
                  <img
                     src={
                        window.location.pathname === '/routes/Cart'
                           ? cartwhite
                           : cartgray
                     }
                     width={20}
                     alt={'cart button'}
                  />
               </NavLink>
               <button
                  style={{
                     border: 'none',
                     background: 'none',
                     cursor: 'pointer',
                  }}
                  onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
               >
                  <img
                     src={mode === 'light' ? buttonlight : buttondark}
                     width={20}
                     alt={'darkmode button'}
                  />
               </button>
            </Container>
         </Navbar>
         <Container>
            <div style={{ textAlign: 'center' }}>
               {mode === 'light' ? (
                  <img
                     src={applecoregif}
                     width={'33%'}
                     alt={'light mode apple core gif'}
                  />
               ) : (
                  <img
                     src={applecoregifdark}
                     width={'33%'}
                     alt={'dark mode apple core gif'}
                  />
               )}
            </div>
         </Container>
         <Outlet />
         <br />
         <Navbar bg="dark">
            <Container>
               <NavLink
                  style={{
                     color: 'gray',
                     textDecoration: 'none',
                     textAlign: 'center',
                     marginLeft: 'auto',
                     marginRight: 'auto',
                  }}
                  to="/routes/AppleCore"
               >
                  <img src={applecore} width={20} alt={'apple core logo'} />
                  <br />
                  <small>
                     Copyright © 2022 Apple Core Inc. All rights reserved.
                  </small>
               </NavLink>
            </Container>
         </Navbar>
      </div>
   );
}
