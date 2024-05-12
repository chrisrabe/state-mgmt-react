import {CounterState, initialState} from "./state";
import {Action} from "redux";
import {CounterActions} from "./actions";

const reducer = (state: CounterState = initialState, action: Action<CounterActions> & {payload: any}) => {
  switch (action.type) {
    case CounterActions.SetCount:
      return { ...state, count: action.payload };
    default:
      return state;
  }
}

export default reducer;
