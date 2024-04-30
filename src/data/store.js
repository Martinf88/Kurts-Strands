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
      //Update state of cart
      const existingItem = state.cart.find((item) => item.title === toy.title); // Check cart fort matching title
      // If an existing item with the same title is found, update its count
      // Otherwise, add the new toy to the cart with a count of 1
      const updatedCart = existingItem
        ? state.cart.map((item) =>
            item.title === toy.title ? { ...item, count: item.count + 1 } : item
          )
        : [...state.cart, { ...toy, count: 1 }];
      // Calculate the total price of all items in the updated cart
      const totalPrice = updatedCart.reduce(
        (total, item) => total + item.price * item.count,
        0
      );

      return { cart: updatedCart, totalPrice };
    }),

  removeOneFromCart: (id) =>
    //Update state of cart
    set((state) => {
      // Find the index of the item to remove from the cart
      const indexToRemove = state.cart.findIndex((item) => item.id === id);
      // If the item is not found in the cart: Return the current state. No change is needed.
      if (indexToRemove === -1) {
        return state;
      }
      // Else: Create a copy of the cart array
      const updatedCart = [...state.cart];
      // Create a copy of the object and update the count of the item to remove by decrementing it by 1
      const updatedItem = {
        ...updatedCart[indexToRemove],
        count: updatedCart[indexToRemove].count - 1,
      };
      // If the updated count is less than or equal to 0, remove the item from the cart
      if (updatedItem.count <= 0) {
        updatedCart.splice(indexToRemove, 1);
      } else {
        // Otherwise, update the cart with the modified item
        updatedCart[indexToRemove] = updatedItem;
      }
      // Calculate the new total price by subtracting the price of the removed item
      const newTotalPrice = state.totalPrice - updatedItem.price;

      return {
        cart: updatedCart,
        totalPrice: newTotalPrice,
      };
    }),

  //sets cart to an empty array and totalPrice and count to 0
  clearCart: () => set({ cart: [], totalPrice: 0, count: 0 }),
}));

export default useStore;
