import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product, size) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, size, quantity: 1 }]);
    }
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (productId, size) => {
    setCartItems(
      cartItems.filter((item) => !(item.id === productId && item.size === size))
    );
      setCartCount(cartCount - 1);
  };

  const changeQuantity = (productId, size, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    );
  };

  const value = { cartItems, addToCart, removeFromCart, changeQuantity,cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
