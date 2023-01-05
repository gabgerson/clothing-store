import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer, ItemCount } from './cart-icon.styles'

const CartIcon = () => {

    const { IsCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleCartOpen = () => setIsCartOpen(!IsCartOpen);
    
 
    
  return (
    <CartIconContainer onClick={toggleCartOpen} >
        <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )

}

export default CartIcon;