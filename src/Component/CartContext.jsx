import React, { createContext, useState } from "react";

export const CartContext = createContext();





const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 const addToCart = (product) => {
    const exists = cartItems.find((item) => item.Id === product.Id);
    if (exists) {
      
      setCartItems(
        cartItems.map((item) =>
          item.Id === product.Id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.Id !== id));
  };


  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.Id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };


  const decreaseQty = (id) => {
    const item = cartItems.find((item) => item.Id === id);
    if (item.quantity === 1) {
      removeFromCart(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.Id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        getTotal,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
