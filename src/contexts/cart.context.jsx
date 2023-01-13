import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";


const addCartItem = (cartItems, productToAdd) => {



   const existingCartItem = cartItems.find((cartItem) => cartItem.id ===productToAdd.id);
   
   if(existingCartItem) {
      return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
      {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem);
   };

   return[...cartItems, {...productToAdd, quantity: 1}]
   //find if cartItems contains productToAdd
   //If found, increment quantity

   //return new array with modified cartItems/ new cart item
} 
const removeCartItem = (cartItems, cartItemToRemove) => {


   const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

   if(existingCartItem.quantity === 1) {
    

      return ( cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id ))
   }
    
   return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?

  
   {...cartItem, quantity: cartItem.quantity - 1}

   : cartItem);

   
   //find if cartItems contains productToAdd
   //If found, increment quantity

   //return new array with modified cartItems/ new cart item
} 
const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id )
   


//actual value you want to access
export const CartContext = createContext({ 
   isCartOpen: false,
   setIsCartOpen: () => {},
   cartItems: [],
   addItemToCart: () => {},
   removeItemFromCart: () => {},
   clearItemFromCart: () => {},
   cartCount: 0,
   cartTotal: 0,
 });



 const CART_ACTION_TYPES ={
   SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
   SET_CART_ITEMS: 'SET_CART_ITEMS',
 };

 const INITIAL_STATE = {
   isCartOpen: false,
   cartItems: [],
   cartCount: 0,
   cartTotal: 0,


 };
 
 const cartReducer = (state, action) => {
   const { type, payload } = action;
 
   switch(type) {
     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
       return{
         ...state,
         isCartOpen: payload
       }
     case CART_ACTION_TYPES.SET_CART_ITEMS:
       return{
         ...state,
         ...payload
       }      
     default:
       throw new Error(`Unhandled type ${type} in cartReducer`)
   }
 };
  

 export const CartProvider = ({ children }) => {
   const [ { isCartOpen, cartItems, cartCount, cartTotal } , dispatch ] = useReducer(cartReducer, INITIAL_STATE);
   const setIsCartOpen = (bool) => {
      
      dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool ))
    };

  const updateCartItemsReducer = (newCartItems) => {
   const newCartCount = newCartItems.reduce((total, cartItem ) => total + cartItem.quantity, 0)
   const newCartTotal = newCartItems.reduce((total, cartItem ) => total + cartItem.quantity * cartItem.price, 0)
   
   dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { 
         cartItems: newCartItems, 
         cartCount:newCartCount, 
         cartTotal:newCartTotal }))
      
   /*
   generate new cart total
   generate new cart count
   dispatch new action with payload = {
      newCartItems, 
      newCartTotal,
      newCartCount
   }
   */
  };

  const addItemToCart = (productToAdd) => {
   const newCartItems = addCartItem(cartItems, productToAdd);
   updateCartItemsReducer(newCartItems)
  };

  const removeItemFromCart = (cartItemToRemove) => {
   const newCartItems = removeCartItem(cartItems, cartItemToRemove);
   updateCartItemsReducer(newCartItems)
  };

  
  const clearItemFromCart = (cartItemToClear) => {
   const newCartItems = clearCartItem(cartItems, cartItemToClear);
   updateCartItemsReducer(newCartItems)
  };

  const value ={isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal};


     return (
     <CartContext.Provider value={value} >
      {children}
      </CartContext.Provider>
     )
 };




// import { createContext, useState, useEffect } from "react";




// const addCartItem = (cartItems, productToAdd) => {



//    const existingCartItem = cartItems.find((cartItem) => cartItem.id ===productToAdd.id);
   
//    if(existingCartItem) {
//       return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
//       {...cartItem, quantity: cartItem.quantity + 1}
//       : cartItem);
//    };

//    return[...cartItems, {...productToAdd, quantity: 1}]
//    //find if cartItems contains productToAdd
//    //If found, increment quantity

//    //return new array with modified cartItems/ new cart item
// } 
// const removeCartItem = (cartItems, cartItemToRemove) => {


//    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

//    if(existingCartItem.quantity === 1) {
    

//       return ( cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id ))
//    }
    
//    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ?

  
//    {...cartItem, quantity: cartItem.quantity - 1}

//    : cartItem);

   
//    //find if cartItems contains productToAdd
//    //If found, increment quantity

//    //return new array with modified cartItems/ new cart item
// } 
// const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id )
   


// //actual value you want to access
// export const CartContext = createContext({ 
//    IsCartOpen: false,
//    setIsCartOpen: () => {},
//    cartItems: [],
//    addItemToCart: () => {},
//    removeItemFromCart: () => {},
//    clearItemFromCart: () => {},
//    cartCount: 0,
//    cartTotal: 0,
//  });

//  export const CartProvider = ({ children }) => {
//   const [IsCartOpen, setIsCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [cartTotal, setCartTotal] = useState(0);


//   useEffect(() => {
//    const newCartCount = cartItems.reduce((total, cartItem ) => total + cartItem.quantity, 0)
//    setCartCount(newCartCount)
//   }, [cartItems])

//   useEffect(() => {
//    const newCartTotal = cartItems.reduce((total, cartItem ) => total + cartItem.quantity * cartItem.price, 0)
//    setCartTotal(newCartTotal)
//   }, [cartItems])

//   const addItemToCart = (productToAdd) => {

//    setCartItems(addCartItem(cartItems, productToAdd));


//   }

//   const removeItemFromCart = (cartItemToRemove) => {

//    setCartItems(removeCartItem(cartItems, cartItemToRemove));


//   }

  
//   const clearItemFromCart = (cartItemToClear) => {

//    setCartItems(clearCartItem(cartItems, cartItemToClear));


//   }
//   const value ={IsCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal};


//      return (
//      <CartContext.Provider value={value} >
//       {children}
//       </CartContext.Provider>
//      )
//  };