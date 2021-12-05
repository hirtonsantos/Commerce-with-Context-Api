import { createContext, useState } from "react";
import { useContext } from "react/cjs/react.development";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
    const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
      const index = cart.map((item) => item.id).indexOf(Number(id))
      cart.splice(index,index+1)
      // console.log(cart)
      setCart([...cart])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext)