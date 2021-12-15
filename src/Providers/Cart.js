import { createContext, useState } from "react";
import { useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log("cartAtual", cart)
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
      const index = cart.map((item) => item.id).indexOf(Number(id))
      cart.splice(index, 1)
      setCart([...cart])
  }

  const newCartSom = cart.reduce((acc, curr) => {
    return acc + curr.price
  }, 0 )

  const semRepetidos = cart.filter(function(el, i) {
    return cart.indexOf(el) === i;
  });

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, newCartSom, semRepetidos }}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext)