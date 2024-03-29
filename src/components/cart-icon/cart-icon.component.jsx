
import { useSelector, useDispatch } from 'react-redux'
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';



import { CartIconContainer, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
     
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
    const dispatch = useDispatch()

    const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    
 
    
  return (
    <CartIconContainer onClick={toggleCartOpen} >
        <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )

}

export default CartIcon;