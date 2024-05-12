import React from 'react';
import ReactStateCounter from "./approaches/ReactStateCounter";
import ReactContextCounter from "./approaches/ReactContextCounter";
import ReduxLegacyCounter from "./approaches/ReduxLegacyCounter";
import ReduxMimicCounter from "./approaches/ReduxMimicCounter";

function App() {
  return (
    <div className="flex p-4 gap-4">
      <ReactStateCounter />
      <ReactContextCounter />
      <ReduxLegacyCounter />
      <ReduxMimicCounter />
    </div>
  );
}

export default App;
