import {Action} from "redux";

export enum CounterActions {
  SetCount = "SET_COUNT"
}

export const setCount = (value: number): Action<CounterActions.SetCount> & {payload: number} => ({
  type: CounterActions.SetCount,
  payload: value
});
