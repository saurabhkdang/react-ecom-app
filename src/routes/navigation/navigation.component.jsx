import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Outlet} from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { NavigationContainer, LogoContainer, NavLinkContainer, NavLink } from './navigation.styles.jsx'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { selectIsCartOpen } from '../../store/cart/cart.selector'

import { signOutStart } from '../../store/user/user.action'

const Navigation = () => {

    const currentUser = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart());

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo' />
            </LogoContainer>
            <NavLinkContainer>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                    currentUser? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ):
                    (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )
                }
                <CartIcon/>
            </NavLinkContainer>
            { isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation