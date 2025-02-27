import {conbineReducers} from "redux";
import authenciateReducer from "./authenticateReducer";
import productReducer from "./productReducer";

export default conbineReducers({
  auth : authenciateReducer,
  product : productReducer
}) 