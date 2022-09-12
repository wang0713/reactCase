// 创建store
import { createStore } from "redux";
import countRedux from '../reducers/calculate'
const store=createStore(countRedux)
export default store