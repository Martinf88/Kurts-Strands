import { create } from "zustand";

const useStore = create((set) => ({
  toys: [],
  cart: [],
  totalPrice: 0,
  count: 0,

  setToys: (newToys) =>
    set((state) => ({
      toys: newToys,
    })),

  addToCart: (toy) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.title === toy.title);
      const updatedCart = existingItem
        ? state.cart.map((item) =>
            item.title === toy.title ? { ...item, count: item.count + 1 } : item
          )
        : [...state.cart, { ...toy, count: 1 }];

      const totalPrice = updatedCart.reduce(
        (total, item) => total + item.price * item.count,
        0
      );

      return { cart: updatedCart, totalPrice };
    }),

  removeOneFromCart: (id) =>
    set((state) => {
      const indexToRemove = state.cart.findIndex((item) => item.id === id);
      if (indexToRemove === -1) {
        return state;
      }

      const updatedCart = [...state.cart];
      const updatedItem = {
        ...updatedCart[indexToRemove],
        count: updatedCart[indexToRemove].count - 1,
      };

      if (updatedItem.count <= 0) {
        updatedCart.splice(indexToRemove, 1);
      } else {
        updatedCart[indexToRemove] = updatedItem;
      }

      const newTotalPrice = state.totalPrice - updatedItem.price;

      return {
        cart: updatedCart,
        totalPrice: newTotalPrice,
      };
    }),

  clearCart: () => set({ cart: [], totalPrice: 0, count: 0 }),
}));

export default useStore;
