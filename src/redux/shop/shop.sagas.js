import  { takeEvery, call, put } from 'redux-saga/effects';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';
import {
fetchCollectionSuccess,
fetchCollectionFail
} from './shop.actions';

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);  // we use call here just so that redux saga has more control here.
        yield put(fetchCollectionSuccess(collectionsMap)); //put is the same as dispatch, in saga.
    } catch (error) {
        yield put(fetchCollectionFail(error));
    }
};
 

export function* fetchCollectionStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, //Stop everytime this action is fired, run fetchCollectionAsync
    fetchCollectionAsync ) 
};