import React from "react";
import Button from "../../components/Button";
import Counter from "../../components/Counter";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "./redux/store";
import {CounterState} from "./redux/state";
import {setCount} from "./redux/actions";

const ReduxLegacyCounter: React.FC = () => {
  const count = useSelector<CounterState, number>(state => state.count);
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(setCount(count + 1))}>
      <Counter count={count} label="Redux Legacy Counter" />
    </Button>
  );
};

const ReduxLegacyCounterWithStore = () => (
  <Provider store={store}>
    <ReduxLegacyCounter />
  </Provider>
)

export default ReduxLegacyCounterWithStore;
