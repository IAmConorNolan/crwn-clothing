import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {selectCartItems, selectCartTotal} from '../../redux/cart/card.selector';

const Checkout = ({cartItems, cartTotal}) => (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>Product</div>
                <div className='header-block'>Description</div>
                <div className='header-block'>Quantity</div>
                <div className='header-block'>Price</div>
                <div className='header-block'>Remove</div>
            </div>
                    {   
                        cartItems.length ?
                        cartItems.map(cartItem => (
                            <CheckoutItem key={cartItem.id} item={cartItem} /> 
                            ))
                        :
                        <span className='empty-message'>Your cart is empty!</span>
                    }
                    <div className='total'>
                        <span>TOTAL: €{cartTotal}</span>
                    </div>

        </div>
);

const mapStateToProps = createStructuredSelector(
    {
        cartItems: selectCartItems,
        cartTotal: selectCartTotal
    }
);

export default connect(mapStateToProps, null)(Checkout);