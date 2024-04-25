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
      const existingItem = state.cart.find((item) => item.title === toy.title);
      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.title === toy.title ? { ...item, count: item.count + 1 } : item
        );
        return { cart: updatedCart, totalPrice: state.totalPrice + toy.price };
      } else {
        return {
          cart: [...state.cart, { ...toy, count: 1 }],
          totalPrice: state.totalPrice + toy.price,
        };
      }
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
}));

export default useStore;
