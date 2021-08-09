import * as Constants  from '../../Constants.js';

const initialState = [];

const ReminderReducre = (state = initialState, action) => {
    switch(action.type){

        case Constants.ADD_REMINDER : 
            state = [... state, action.payload]; // use thi to push data into array
            return state;

        case Constants.UPDATE_REMINDER : 
            const UpdateState = state.map((item)=>item.id === action.payload.id ? action.payload : item);
            state = UpdateState;
            return state;

        case Constants.DELETE_REMINDER : 
            const deleteState = state.filter((item)=>item.id !== action.payload && item);
            state = deleteState;
            return state;
    
        default:
            return state;

    }
}

export default ReminderReducre
