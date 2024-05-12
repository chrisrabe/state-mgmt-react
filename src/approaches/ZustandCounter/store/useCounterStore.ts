import {create} from "zustand";

interface State {
  count: number;
}

interface Action {
  setCount(count: number): void;
}

const useCounterStore = create<State & Action>((set, _getState) => ({
  count: 0,
  setCount: (count: number) => set({count})
}));

export default useCounterStore;
