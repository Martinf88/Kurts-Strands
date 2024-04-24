import { create } from "zustand";

const useStore = create((set) => ({
  toys: [],

  setToys: (newToys) =>
    set((state) => ({
      toys: newToys,
    })),
}));

export default useStore;
