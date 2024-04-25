import { create } from "zustand";

const useStore = create((set) => ({
  toys: [],
  cart: [],

  setToys: (newToys) =>
    set((state) => ({
      toys: newToys,
    })),

  addToCart: (toy) => set((state) => ({ cart: [...state.cart, toy] })),
}));

export default useStore;
