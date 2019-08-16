import React from 'react';
import { connect } from 'react-redux'

import {ReactComponent as Logo} from '../../assets/img/crown.svg';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/card.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContainer, OptionsContainer, Option} from './headers.styles';

import {signOutStart} from '../../redux/user/user.actions';


const Header = ({currentUser, hidden, signOutStart}) => (

    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <Option to='/shop'>
                Shop
            </Option>
            <Option to='/contact'>
                Contact
            </Option>
            {
                currentUser ?
                <Option as='div' onClick={signOutStart}>Sign Out</Option>
                :
                <Option to='/sign-in'>Sign in</Option>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({ //destructuring nested properties off of the redux state.
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header); //Now currentUser is mapped to the state's current user.