import { useState, createContext } from 'react';

const StateContext = createContext();

function StateProvider({ children }) {
   const [search, setSearch] = useState('');
   const [mode, setMode] = useState('light');
   const [rerender, setRerender] = useState(false);

   function handleHeart(product) {
      fetch(`http://localhost:3000/products/${product.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            heart: !product.heart,
         }),
      }).then(setRerender(!rerender));
   }

   function handleAddToCart(product) {
      fetch(`http://localhost:3000/products/${product.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            inCart: !product.inCart,
         }),
      }).then(setRerender(!rerender));
   }

   return (
      //<SearchContext.Provider value={{ state, setState, function(s) }}>
      <StateContext.Provider
         value={{
            search,
            setSearch,
            mode,
            setMode,
            handleHeart,
            handleAddToCart,
            rerender,
            setRerender,
         }}
      >
         {children}
      </StateContext.Provider>
   );
}

export { StateContext, StateProvider };
