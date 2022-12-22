import{ combineReducers,createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// to generate middleware
import {restaurantListReducer} from './Reducers/restaurantReducer'

const reducers=combineReducers({//2
restaurantReducer:restaurantListReducer
//key and function
})

const middleware = [thunk]
const store=createStore(reducers,applyMiddleware(...middleware))//1

export default store

