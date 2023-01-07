
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector} from 'react-redux'
import Button from '../button/button-component';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'


const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
   
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
     navigate('/checkout')
     
    }

  return (
    <CartDropdownContainer className="cart-dropdown-container">
      <CartItems>
        {
        cartItems.length ?
        cartItems.map((item)=>(
            <CartItem key={item.id} cartItem={item}/>
        )) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>     
        )
      }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;