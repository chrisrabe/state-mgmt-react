import React from "react";
import Button from "../../components/Button";
import Counter from "../../components/Counter";
import {countAtom} from "./atoms/counterAtoms";
import {useAtom} from "jotai";

const JotaiCounter: React.FC = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <Button onClick={() => setCount(count + 1)}>
      <Counter count={count} label="Jotai Counter" />
    </Button>
  )
};

export default JotaiCounter;