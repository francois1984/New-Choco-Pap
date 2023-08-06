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
}

const CartContext = createContext<CartContextValue>({ cartItems: [], addToCart: () => {} });

export const useCartContext = () => useContext(CartContext);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

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
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
