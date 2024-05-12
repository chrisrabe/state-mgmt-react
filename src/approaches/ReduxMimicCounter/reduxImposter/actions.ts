export interface PayloadAction<T, V> {
  type: T,
  payload: V
}

export enum CounterActions {
  SetCount = "SET_COUNT"
}

export const setCount = (value: number): PayloadAction<CounterActions, number> => ({
  type: CounterActions.SetCount,
  payload: value
});
