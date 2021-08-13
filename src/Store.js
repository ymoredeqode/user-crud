import { createStore , applyMiddleware } from "redux";
import reducers  from "./Redux/Reducers/Index";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension' ;
// import logger from 'redux-logger';
// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


export default store;