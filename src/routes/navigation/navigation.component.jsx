import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { useSelector, useDispatch } from 'react-redux';


import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';


import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';


import { signOutStart } from '../../store/user/user.action';

import { NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.styles'
const Navigation = () => {
     
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();

   const handleSignOut = () => {
    dispatch(signOutStart())
   }

  
    return (
      <Fragment>  
        <NavigationContainer>
        
          <LogoContainer to='/'>
            <CrwnLogo className='logo' />
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
              SHOP
            </NavLink>
            {currentUser ? 
                (<NavLink as='span' onClick={handleSignOut}>SIGN OUT</NavLink>)
                : (<NavLink className='nav-link' to='/auth'>
                SIGN IN
              </NavLink>)
            }
             <CartIcon  />
          </NavLinks>
    
          {isCartOpen && <CartDropdown />}

        
      </NavigationContainer>
      <Outlet /> 
     </Fragment>
    );
  };



  

export default Navigation;