import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/card.selector';

import {ReactComponent as ShoppingIcon} from '../../assets/img/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> {itemCount} </span>
    </div>
);

const mapStateToProps = state => (
    {
        itemCount: selectCartItemsCount(state)
        // This is a memowise use of selectors, to pull out the amount of items from the state! Doesn't get recalled for no reason!
    }
);

const mapDispatchToPropps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToPropps)(CartIcon);