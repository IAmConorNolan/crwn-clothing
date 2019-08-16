export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(el => el.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(el => 
            el.id === cartItemToAdd.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(el => el.id === cartItemToRemove.id);

    if (existingCartItem.quantity > 1) {
        return cartItems.map(el => 
            el.id === cartItemToRemove.id
            ? { ...el, quantity: el.quantity - 1 }
            : el
        );
    } else {
        return cartItems;
    }

    //return [...cartItems, {...cartItemToRemove, quantity: 1}];
};
