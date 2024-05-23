import React from "react";

interface CounterProps {
  count: number;
  label?: string;
}

const Counter: React.FC<CounterProps> = ({count, label}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-5xl">{count}</span>
      <span className="text-lg font-bold">{label ?? "Counter"}</span>
    </div>
  )
};

export default Counter;
