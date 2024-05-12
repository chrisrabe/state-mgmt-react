import React from 'react';
import ReactStateCounter from "./approaches/ReactStateCounter";
import ReactContextCounter from "./approaches/ReactContextCounter";
import ReduxLegacyCounter from "./approaches/ReduxLegacyCounter";
import ReduxMimicCounter from "./approaches/ReduxMimicCounter";
import ReduxSliceCounter from "./approaches/ReduxSliceCounter";

function App() {
  return (
    <div className="flex p-4 gap-4">
      <ReactStateCounter />
      <ReactContextCounter />
      <ReduxLegacyCounter />
      <ReduxMimicCounter />
      <ReduxSliceCounter />
    </div>
  );
}

export default App;
