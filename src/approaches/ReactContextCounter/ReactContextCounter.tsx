import React, {useContext} from "react";
import {CountContext, CountContextProvider} from "./CountContextProvider";
import Button from "../../components/Button";
import Counter from "../../components/Counter";

const ReactContextCounter: React.FC = () => {
  const {count, setCount} = useContext(CountContext);

  return (
    <Button onClick={() => setCount(count + 1)}>
      <Counter count={count} label="Context Counter" />
    </Button>
  )
};

const ReactContextCounterWithProvider = () => (
  <CountContextProvider>
    <ReactContextCounter />
  </CountContextProvider>
)

export default ReactContextCounterWithProvider;