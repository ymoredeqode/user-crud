import formReducer from './formReducer';
import postReducer from './postReducer';

import { combineReducers } from 'redux';

const reducers = combineReducers(
    {
        formReducer,
        postReducer
    }
)
export default reducers;