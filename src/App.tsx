import React from 'react';
import ReactStateCounter from "./approaches/ReactStateCounter";
import ReactContextCounter from "./approaches/ReactContextCounter";
import ReduxLegacyCounter from "./approaches/ReduxLegacyCounter";
import ReduxMimicCounter from "./approaches/ReduxMimicCounter";
import ReduxSliceCounter from "./approaches/ReduxSliceCounter";
import ZustandCounter from "./approaches/ZustandCounter";
import JotaiCounter from "./approaches/JotaiCounter";
import RecoilCounter from "./approaches/RecoilCounter";

function App() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 gap-4">
      <ReactStateCounter />
      <ReduxLegacyCounter />
      <ReactContextCounter />
      <ReduxMimicCounter />
      <ReduxSliceCounter />
      <ZustandCounter />
      <JotaiCounter />
      <RecoilCounter />
    </div>
  );
}

export default App;
