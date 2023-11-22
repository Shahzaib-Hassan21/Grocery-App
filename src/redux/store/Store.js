import {createStore} from 'redux';
import Reducers from '../reducers/Reducers';
import Reducers2 from '../reducers/Reducers2';
import AddressReducers from '../reducers/AddressReducers';
import {combineReducers} from 'redux';

const routerReducer = combineReducers({Reducers, Reducers2, AddressReducers});
const store = createStore(routerReducer);

export default store;
