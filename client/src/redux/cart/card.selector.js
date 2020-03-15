import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart],
    cart => cart.cartItems); // Thise creates a memwise selector 

export const selectCartHidden = createSelector([selectCart],
    cart => cart.hidden); // Thise creates a memwise selector 

    export const selectCartItemsCount = createSelector(
        [selectCartItems],
        cartItems =>
          cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
              accumalatedQuantity + cartItem.quantity,
            0
          )
    )

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0)
)