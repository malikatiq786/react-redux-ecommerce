import {createStore, combineReducers,compose} from "redux"
import ProductReducer from "./reducers/ProductReducer"
import CartReducer from "./reducers/CartReducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const root = combineReducers({
    ProductReducer,
    CartReducer
});
const store = createStore(root,composeEnhancers());
export default store;