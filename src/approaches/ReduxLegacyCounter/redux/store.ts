import { createStore } from 'redux';
import reducer from "./reducer";
import {initialState} from "./state";

export default createStore(reducer, initialState);
