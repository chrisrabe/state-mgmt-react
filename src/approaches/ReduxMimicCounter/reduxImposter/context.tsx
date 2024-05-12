import React, {createContext, ReactNode, useContext, useReducer} from "react";
import reducer from "./reducer";
import {CounterState, initialState} from "./state";
import {CounterActions, PayloadAction} from "./actions";

const StateContext = createContext<CounterState>(initialState);
const DispatchContext = createContext<React.Dispatch<PayloadAction<CounterActions, any>> | null>(
  null
);

interface CounterProviderProps {
  children: ReactNode;
}

export const useCounterState = () => useContext(StateContext);
export const useCounterDispatch = () => useContext(DispatchContext);

export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}