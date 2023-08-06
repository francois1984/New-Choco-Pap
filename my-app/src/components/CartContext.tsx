import React, { createContext, useContext, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextValue {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void; // Ajouter la fonction de vidage du panier
  cartItemCount: number;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextValue>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {}, // Initialiser la fonction de vidage du panier
  cartItemCount: 0,
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = (product: Product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);

    if (productInCart) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    setCartItemCount((prevItemCount) => prevItemCount + 1);
  };

  const removeFromCart = (product: Product) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );

    setCartItems(updatedCart.filter((item) => item.quantity > 0));
    setCartItemCount((prevItemCount) => prevItemCount - 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartItemCount(0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
