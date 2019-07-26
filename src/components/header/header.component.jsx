import React from 'react';
import {ReactComponent as Logo} from '../../assets/img/crown.svg';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/card.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContainer, OptionsContainer, Option} from './headers.styles';


const Header = ({currentUser, hidden}) => (
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
                <Option as='div' onClick={() => auth.signOut()}>Sign Out</Option>
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

export default connect(mapStateToProps)(Header); //Now currentUser is mapped to the state's current user.