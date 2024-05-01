import { create } from "zustand";

const useStore = create((set) => ({
  toys: [],
  cart: [],
  totalPrice: 0,
  count: 0,
  searchTerm: "",

  //Updates searchTerm with information from searchfield
  setSearchTerm: (searchTerm) =>
    set((state) => ({
      searchTerm: searchTerm,
    })),

  setToys: (newToys) =>
    set((state) => ({
      toys: newToys,
    })),

  addToCart: (toy) =>
    set((state) => {
      // Check if there is an existing item in the cart with the same title
      const existingItem = state.cart.find((item) => item.title === toy.title);

      if (existingItem) {
        // If an item with the same title is found, update its count
        const updatedCart = state.cart.map((item) => {
          if (item.title === toy.title) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
        // Calculate the total price of all items in the updated cart
        const totalPrice = updatedCart.reduce(
          (total, item) => total + item.price * item.count,
          0
        );
        return { cart: updatedCart, totalPrice };
      } else {
        // If no item with the same title is found, add the new toy to the cart with a count of 1
        const updatedCart = [...state.cart, { ...toy, count: 1 }];
        // Calculate the total price of all items in the updated cart
        const totalPrice = updatedCart.reduce(
          (total, item) => total + item.price * item.count,
          0
        );
        return { cart: updatedCart, totalPrice };
      }
    }),

  removeOneFromCart: (id) =>
    set((state) => {
      // Find index of item to remove
      const indexToRemove = state.cart.findIndex((item) => item.id === id);
      // If the item is not found in the cart: Return the current state. No change is needed.
      if (indexToRemove === -1) {
        return state;
      }
      // Else: Create a copy of cart
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

  removeAllFromCart: (id) =>
    set((state) => {
      // Remove all items from the cart with the given id
      const updatedCart = state.cart.filter((item) => item.id !== id);

      // Calculate the total price of all items in the updated cart
      const updatedTotalPrice = updatedCart.reduce(
        (totalPrice, item) => totalPrice + item.price * item.count,
        0
      );

      // Calculate the total count of all items in the updated cart
      const updatedTotalCount = updatedCart.reduce(
        (count, item) => count + item.count,
        0
      );

      // Return the updated cart, total price, and total count
      return {
        cart: updatedCart, // Updated cart without the removed items
        totalPrice: updatedTotalPrice, // Updated total price after removal
        count: updatedTotalCount, // Updated total count after removal
      };
    }),

  //sets cart to an empty array and totalPrice and count to 0
  clearCart: () => set({ cart: [], totalPrice: 0, count: 0 }),
}));

export default useStore;
