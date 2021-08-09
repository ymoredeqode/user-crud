import formReducer from './formReducer';
import ReminderReducre from './ReminderReducre';

import { combineReducers } from 'redux';

const reducers = combineReducers(
    {
        formReducer,
        ReminderReducre
    }
)
export default reducers;