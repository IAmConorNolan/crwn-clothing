import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => { // INITIAL_STATE is default
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER: //WHENEVER THE TYPE OF ACTION IS SET CURRENT USER
            return {
                ...state,
                currentUser: action.payload, //RETURNS THE CURRENT STATE, + PAYLOAD AS A NEW OBJECT
            }
            
    
        default:
            return state;
    }
};

export default userReducer;