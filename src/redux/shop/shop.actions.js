import ShopActionTypes from './shop.types'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

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
 
export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        
        collectionRef.get().then(snapShot => { 
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);  
            dispatch(fetchCollectionSuccess(collectionsMap));
          }).catch(error => dispatch(fetchCollectionFail(error)));
    }
};
 
 