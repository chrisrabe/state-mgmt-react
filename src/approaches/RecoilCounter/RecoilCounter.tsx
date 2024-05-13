import React from "react";
import {RecoilRoot, useRecoilState} from "recoil"
import Button from "../../components/Button";
import Counter from "../../components/Counter";
import {countAtom} from "./atoms/counterAtoms";

const RecoilCounter: React.FC = () => {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <Button onClick={() => setCount(count + 1)}>
      <Counter count={count} label="Recoil Counter" />
    </Button>
  )
};

const RecoilCounterRoot: React.FC = () => (
  <RecoilRoot>
    <RecoilCounter />
  </RecoilRoot>
)

export default RecoilCounterRoot;