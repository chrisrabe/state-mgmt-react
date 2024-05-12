import React from 'react';
import ReactStateCounter from "./approaches/ReactStateCounter";
import ReactContextCounter from "./approaches/ReactContextCounter";

function App() {
  return (
    <div className="flex p-4 gap-4">
      <ReactStateCounter />
      <ReactContextCounter />
    </div>
  );
}

export default App;
