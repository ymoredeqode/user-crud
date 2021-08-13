import * as Constants  from '../../Constants/ActionKeys.js';

// const initialState = [];
const initialState = {
    user:[]
};


const contactReducer = (state = initialState, action) => {
    switch(action.type){

        case Constants.FETCH_USERS_SUCCESS : 
        state.user = action.payload;
        return state;

        case Constants.ADD_USER : 
        state = [... state.user, action.payload]; // use this to push data into array
        return state;

        case Constants.UPDATE_USER : 
        const UpdateState = state.user.map((item)=>item.id === action.payload.id ? action.payload : item);
        state.user = UpdateState;
        return state;
        
        case Constants.DELETE_USER : 
        const deleteState = state.user.filter((item)=>item.id !== action.payload && item);
        state.user = deleteState;
        return state;

        default:
            return state;

    }
}


export default contactReducer;