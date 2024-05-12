import React from "react";
import Button from "../../components/Button";
import Counter from "../../components/Counter";
import useCounterStore from "./store/useCounterStore";

const ZustandCounter: React.FC = () => {
  const {count, setCount} = useCounterStore();

  return (
    <Button onClick={() => setCount(count + 1)}>
      <Counter count={count} label="Zustand Counter" />
    </Button>
  )
};

export default ZustandCounter;