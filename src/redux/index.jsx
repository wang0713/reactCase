// 创建store
import { createStore, combineReducers } from "redux";
import countRedux from './reducers/calculate'
import multiplication from './reducers/multiplication'
console.log(combineReducers);

const rootReducer = combineReducers({
    countRedux,
    // multiplication
})
export default createStore( rootReducer )