import React from "react";
import {Provider, useSelector} from "react-redux";
import store, {RootState, useAppDispatch} from "./redux/store";
import Button from "../../components/Button";
import Counter from "../../components/Counter";
import {setCount} from "./redux/slices/counterSlice";

const ReduxSliceCounter: React.FC = () => {
  const count = useSelector<RootState, number>((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <Button onClick={() => dispatch(setCount(count + 1))}>
      <Counter count={count} label="Redux Slice Counter" />
    </Button>
  )
};

const ReduxSliceCounterWithProvider: React.FC = () => (
  <Provider store={store}>
    <ReduxSliceCounter />
  </Provider>
)

export default ReduxSliceCounterWithProvider;