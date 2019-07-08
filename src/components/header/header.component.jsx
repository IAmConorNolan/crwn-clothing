import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/img/crown.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='option-list'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/sign-in'>
                Sign in
            </Link>
        </div>
    </div>
)

export default Header;