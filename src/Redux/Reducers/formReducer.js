import * as Constants  from '../../Constants/ActionKeys.js';

// const initialState = [];
const initialState = {};


const contactReducer = (state = initialState, action) => {
    switch(action.type){

        case Constants.FETCH_USERS_SUCCESS : 
        state = action.payload;
        return state;

        case Constants.ADD_USER : 
        state = [... state, action.payload]; // use thi to push data into array
        return state;

        case Constants.UPDATE_USER : 
        const UpdateState = state.map((item)=>item.id === action.payload.id ? action.payload : item);
        state = UpdateState;
        return state;
        
        case Constants.DELETE_USER : 
        const deleteState = state.filter((item)=>item.id !== action.payload && item);
        state = deleteState;
        return state;

        default:
            return state;

    }
}


export default contactReducer;