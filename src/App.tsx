import React from 'react';
import ReactStateCounter from "./approaches/ReactStateCounter";
import ReactContextCounter from "./approaches/ReactContextCounter";
import ReduxLegacyCounter from "./approaches/ReduxLegacyCounter";

function App() {
  return (
    <div className="flex p-4 gap-4">
      <ReactStateCounter />
      <ReactContextCounter />
      <ReduxLegacyCounter />
    </div>
  );
}

export default App;
