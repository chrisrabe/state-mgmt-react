import React from "react";

interface CounterProps {
  count: number;
  label?: string;
}

const Counter: React.FC<CounterProps> = ({count, label}) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-gray-50 border-2 border-gray-200 h-64 w-64 shadow-2xl">
      <span className="text-5xl">{count}</span>
      <span className="text-lg font-bold">{label ?? "Counter"}</span>
    </div>
  )
};

export default Counter;