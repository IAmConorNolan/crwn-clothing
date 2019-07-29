import ShopActionTypes from './shop.types';

const initialState = {
    collections: null,
    isFetching: null,
    errorMessage: null
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
        return {
            ...state,
            isFetching: false,
        }
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
        return {
            ...state,
            collections: action.payload
        };
    case ShopActionTypes.FETCH_COLLECTIONS_FAIL:
        return {
            ...state,
            isFetching: false,
            errorMessage: action.payload,
        }
    default:
        return state;
    }
}

export default shopReducer;