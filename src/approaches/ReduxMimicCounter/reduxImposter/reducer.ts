import {CounterState, initialState} from "./state";
import {CounterActions, PayloadAction} from "./actions";

const reducer = (state: CounterState = initialState, action: PayloadAction<CounterActions, any>) => {
  switch (action.type) {
    case CounterActions.SetCount:
      return { ...state, count: action.payload };
    default:
      return state;
  }
}

export default reducer;
