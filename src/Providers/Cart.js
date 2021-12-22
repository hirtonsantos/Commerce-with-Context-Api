import { createContext, useState } from "react";
import { useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // chama a variavel local que armazena os dados no navegador
    const productsList = JSON.parse(localStorage.getItem("cart")) || [];
    // joga ela em uma nova variavel que irá armazenar o item atual junto
    // com os outros já adicionados ou junto com o array vazio.
    const newList = [...productsList, item];
    // pega essa nova variavel e seta ela no navegador
    // e no carrinho da aplicação
    localStorage.setItem("cart", JSON.stringify(newList));
    setCart(newList)
    // só tem um problema, será necessário criar algo para atualizar
    // toda vez que o navegador reinicia.
  };

  const removeFromCart = (id) => {
      // chama a variavel local que armazena os dados no navegador
      const productsList = JSON.parse(localStorage.getItem("cart")) || [];
      const index = productsList.map((item) => item.id).indexOf(Number(id))
      productsList.splice(index, 1)
      // seta a variavel no navegador
      // e no carrinho da aplicação
      localStorage.setItem("cart", JSON.stringify(productsList));
      setCart([...productsList])
  }

  // const newCartSom = cart.reduce((acc, curr) => {
  //   return acc + curr.price
  // }, 0 )

  // const semRepetidos = cart.filter(function(el, i) {
  //   return cart.indexOf(el) === i;
  // });

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart}}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext)