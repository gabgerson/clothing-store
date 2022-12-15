import { createContext, useState } from "react";

//actual value you want to access
export const CartContext = createContext({ 
   cartOpen: false,
   setCartOpen: () => {},
 });

 export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const value ={cartOpen, setCartOpen};


     return (
     <CartContext.Provider value={value} >
      {children}
      </CartContext.Provider>
     )
 };