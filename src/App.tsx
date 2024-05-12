import React from 'react';
import ReactStateCounter from "./approaches/ReactStateCounter";
import ReactContextCounter from "./approaches/ReactContextCounter";
import ReduxLegacyCounter from "./approaches/ReduxLegacyCounter";
import ReduxMimicCounter from "./approaches/ReduxMimicCounter";
import ReduxSliceCounter from "./approaches/ReduxSliceCounter";
import ZustandCounter from "./approaches/ZustandCounter";

function App() {
  return (
    <div className="grid grid-cols-5 p-4 gap-4">
      <ReactStateCounter />
      <ReactContextCounter />
      <ReduxLegacyCounter />
      <ReduxMimicCounter />
      <ReduxSliceCounter />
      <ZustandCounter />
    </div>
  );
}

export default App;
