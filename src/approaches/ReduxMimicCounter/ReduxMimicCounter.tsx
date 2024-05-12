import React from "react";
import Button from "../../components/Button";
import Counter from "../../components/Counter";
import {CounterProvider, useCounterDispatch, useCounterState} from "./reduxImposter/context";
import {setCount} from "./reduxImposter/actions";

const ReduxMimicCounter: React.FC = () => {
  const {count} = useCounterState();
  const dispatch = useCounterDispatch();

  return (
    <Button onClick={() => dispatch?.(setCount(count + 1))}>
      <Counter count={count} label="Redux Mimic Counter" />
    </Button>
  )
};

const ReduxMimicCounterWithProvider = () => (
  <CounterProvider>
    <ReduxMimicCounter />
  </CounterProvider>
)

export default ReduxMimicCounterWithProvider;