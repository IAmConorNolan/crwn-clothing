import ShopActionTypes from './shop.types'

export const updateCollections = item => ({
    type: 'UPDATE_COLLECTIONS',
    payload: item,
});

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START, 
});

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, 
    payload: collectionsMap
});
 
export const fetchCollectionFail = (error) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
    payload: error.message,
});

 
 