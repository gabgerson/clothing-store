import { createContext, useState } from "react";

// const addCartItem = (cartItems, productToAdd) => {
//    // const found = cartItems.includes(productToAdd)

//  if (cartItems === undefined) {
  
//   return [...cartItems, {...productToAdd, quantity: 1}]
//  }
 
//    for (let i = 0; i < cartItems.length; i++) {
//        if (cartItems[i].id === productToAdd.id ) {
//          const cartItem = cartItems[i];
         
//       return cartItems
//        }}


//    return {...carItems, quantity: cartItems.quantity +1}
//    //find if cartItems contains productToAdd
//    //If found, increment quantity

//    //return new array with modified cartItems/ new cart item
// } 
// const addCartItem = (cartItems, productToAdd) => {
//    // const found = cartItems.includes(productToAdd)
//    const found  = cartItems.find((cartItem => cartItem.id === productToAdd.id))

//    if(found) {

//       cartItems.map((cartItem) => cartItem.id === productToAdd.id ? )
//    }
// } 


const addCartItem = (cartItems, productToAdd) => {



   const existingCartItem = cartItems.find((cartItem) => cartItem.id ===productToAdd.id);
   
   if(existingCartItem) {
      return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
      {...cartItem, quantity: cartItem.quantity +1}
      : cartItem);
   };

   return[...cartItems, {...productToAdd, quantity: 1}]
   //find if cartItems contains productToAdd
   //If found, increment quantity

   //return new array with modified cartItems/ new cart item
} 



//actual value you want to access
export const CartContext = createContext({ 
   IsCartOpen: false,
   setIsCartOpen: () => {},
   cartItems: [],
   addItemToCart: () => {},
   totalQuantityItemsCart: 0,
 });

 export const CartProvider = ({ children }) => {
  const [IsCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {

   setCartItems(addCartItem(cartItems, productToAdd));

  }
  const value ={IsCartOpen, setIsCartOpen, addItemToCart, cartItems};


     return (
     <CartContext.Provider value={value} >
      {children}
      </CartContext.Provider>
     )
 };