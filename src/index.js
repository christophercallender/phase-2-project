import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AppleCore from './routes/AppleCore';
import AirPods from './routes/AirPods';
import IMac from './routes/IMac';
import IPad from './routes/IPad';
import IPhone from './routes/IPhone';
import Mac from './routes/Mac';
import MacBook from './routes/MacBook';
import TVandHome from './routes/TVandHome';
import Watch from './routes/Watch';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import Price from './routes/Price';
import Hearts from './routes/Hearts';
import Cart from './routes/Cart';
import SignedUp from './routes/SignedUp';
import SignedIn from './routes/SignedIn';

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />}>
            <Route path="/routes/AppleCore" element={<AppleCore />} />
            <Route path="/routes/AirPods" element={<AirPods />} />
            <Route path="/routes/IMac" element={<IMac />} />
            <Route path="/routes/IPad" element={<IPad />} />
            <Route path="/routes/IPhone" element={<IPhone />} />
            <Route path="/routes/Mac" element={<Mac />} />
            <Route path="/routes/MacBook" element={<MacBook />} />
            <Route path="/routes/TVandHome" element={<TVandHome />} />
            <Route path="/routes/Watch" element={<Watch />} />
            <Route path="/routes/SignUp" element={<SignUp />} />
            <Route path="/routes/SignIn" element={<SignIn />} />
            <Route path="/routes/Price" element={<Price />} />
            <Route path="/routes/Hearts" element={<Hearts />} />
            <Route path="/routes/Cart" element={<Cart />} />
            <Route path="/routes/SignedUp" element={<SignedUp />} />
            <Route path="/routes/SignedIn" element={<SignedIn />} />
         </Route>
      </Routes>
   </BrowserRouter>
);
