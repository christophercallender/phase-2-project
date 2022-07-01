import { useState, createContext } from 'react';

const StateContext = createContext();

function StateProvider({ children }) {
   const [products, setProducts] = useState([]);
   const [search, setSearch] = useState('');
   const [mode, setMode] = useState('light');
   const [rerender, setRerender] = useState(false);

   const [users, setUsers] = useState([]);
   const [first, setFirst] = useState('');
   const [last, setLast] = useState('');
   const [street, setStreet] = useState('');
   const [city, setCity] = useState('');
   const [state, setState] = useState('');
   const [zip, setZip] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');

   const [username, setUsername] = useState('');
   const [currentUser, setCurrentUser] = useState('');
   const [password, setPassword] = useState('');

   function handleHeart(product) {
      fetch(`https://applecore2.herokuapp.com/products/${product.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            heart: !product.heart,
         }),
      });
   }

   function handleCart(product) {
      fetch(`https://applecore2.herokuapp.com/products/${product.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            inCart: !product.inCart,
         }),
      });
   }

   return (
      //<SearchContext.Provider value={{ state, setState, function(s) }}>
      <StateContext.Provider
         value={{
            products,
            setProducts,
            search,
            setSearch,
            mode,
            setMode,
            handleHeart,
            handleCart,
            rerender,
            setRerender,
            users,
            setUsers,
            username,
            setUsername,
            currentUser,
            setCurrentUser,
            password,
            setPassword,
            first,
            setFirst,
            last,
            setLast,
            street,
            setStreet,
            city,
            setCity,
            state,
            setState,
            zip,
            setZip,
            email,
            setEmail,
            phone,
            setPhone,
         }}
      >
         {children}
      </StateContext.Provider>
   );
}

export { StateContext, StateProvider };
