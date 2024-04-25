import { create } from "zustand";

const useStore = create((set) => ({
  toys: [],
  cart: [],
  totalPrice: 0,

  setToys: (newToys) =>
    set((state) => ({
      toys: newToys,
    })),

  addToCart: (toy) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.name === toy.name);
      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.name === toy.name ? { ...item, count: item.count + 1 } : item
        );
        return { cart: updatedCart, totalPrice: state.totalPrice };
      } else {
        return {
          cart: [...state.cart, { ...toy, count: 1 }],
          totalPrice: state.totalPrice + toy.price,
        };
      }
    }),
}));

export default useStore;
