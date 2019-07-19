import CartActionTypes from './cart.types.js'
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
            case CartActionTypes.ADD_ITEM:
                    return {
                        ...state,
                        cartItems: addItemToCart(state.cartItems, action.payload) //spread in existing array values, and then anything in payload (new values)
                    };
        default:
            return state;
    }
};

export default cartReducer;
