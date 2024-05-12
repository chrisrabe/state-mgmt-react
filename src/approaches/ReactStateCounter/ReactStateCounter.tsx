import React, {useState} from "react";
import Button from "../../components/Button";
import Counter from "../../components/Counter";

const ReactStateCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(value => value + 1)}>
      <Counter count={count} label="React State Counter" />
    </Button>
  )
};

export default ReactStateCounter;