import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => { // INITIAL_STATE is default
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload, //RETURNS THE CURRENT STATE, + PAYLOAD AS A NEW OBJECT
                error: null,
            }

        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE: //WHENEVER THE TYPE OF ACTION IS SET CURRENT USER
            return {
                 ...state,
                 error: action.payload, //RETURNS THE CURRENT STATE, + PAYLOAD AS A NEW OBJECT
            }

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null,
            }
    
        default:
            return state;
    }
};

export default userReducer;