import React from 'react';
import './card-dropdown.styles.scss';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.components';
import CustomButton from '../custom-button/custom-button.component';
import {selectCartItems} from '../../redux/cart/card.selector';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
                    {
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} /> 
                            ))
                    }
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = (state) => (
    {
        cartItems: selectCartItems(state),
    }
);

export default connect(mapStateToProps, null)(CartDropdown);