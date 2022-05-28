import { combineReducers } from "redux";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import {getAllPizzasReducer,addPizzasReducer,getPizzaByIdReducer,updatePizzaReducer} from './reducers/pizzasReducers'
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer, loginUserReducer, getAllUsersReducer } from "./reducers/userReducer";
import {getAllOrdersReducer, placeOrderReducer, getUserOrderReducer } from "./reducers/orderReducer";
const finalReducer= combineReducers({
    getAllPizzasReducer:getAllPizzasReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrderReducer:getUserOrderReducer,
    getAllOrdersReducer:getAllOrdersReducer,
    getAllUsersReducer:getAllUsersReducer,
    addPizzasReducer:addPizzasReducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    updatePizzaReducer:updatePizzaReducer
})

const cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): []
const currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')): null
const initialstate ={
    cartReducer:{cartItems:cartItems},
    loginUserReducer:{currentUser:currentUser}
}

const composeEnhancers= composeWithDevTools({})

const store = legacy_createStore(finalReducer , initialstate, composeEnhancers(applyMiddleware(thunk)))

export default store