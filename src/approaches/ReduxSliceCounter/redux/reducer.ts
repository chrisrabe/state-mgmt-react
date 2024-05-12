import {combineReducers} from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

export default combineReducers({
  counter: counterSlice,
});
