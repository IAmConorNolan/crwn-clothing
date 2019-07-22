export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(el => el.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(el => 
            el.id === cartItemToAdd.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

