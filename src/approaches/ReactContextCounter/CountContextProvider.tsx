import React, {ReactNode, useState} from "react";

interface CountContextType {
  count: number;
  setCount: (count: number) => void;
}

export const CountContext = React.createContext<CountContextType>({
  count: 0,
  setCount: () => {}
});

interface CountContextProviderProps {
  children?: ReactNode;
}

export const CountContextProvider: React.FC<CountContextProviderProps> = ({children}) => {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  )
};