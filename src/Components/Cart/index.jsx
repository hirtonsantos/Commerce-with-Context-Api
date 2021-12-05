// import { useDispatch } from "react-redux";
// import { removeFromCart } from "../../store/modules/Cart/actions";
// import { removeToCardThunk } from "../../store/modules/Cart/thunks";
// import Button from "../Button";
// import {useState} from "react"
import { useHistory } from "react-router";
import { useCart } from "../../Providers/Cart";
import ProductCart from "../ProductCart";

import { Conteiner } from "./style";

const Cart = ({showcart}) => {

  //AQUI EU FAÇO UM MAP PARA MOSTRAR TODOS OS PRODUTOS DENTRO DO CARRINHO
  // CHAMO O COMPONENTE PRODUCTCART
  const {cart} = useCart()

  const history = useHistory()

  const cartSom = cart.reduce((acc, curr) => {
    return acc + curr.price
  }, 0 )


  return (
    <Conteiner showCart={showcart}>
      <h2>Products Cart - <span>{cartSom.toFixed(2)}</span></h2>
      <ul>
      {cart.map((item) => {
        return (
          <li>
          <ProductCart name={item.name} price={item.price} image={item.image}/>
          </li>
        )
      }).splice(-1)}
      </ul>
      <button onClick={() => history.push("/CartPage")}>
        Ir para o carrinho
      </button>
    </Conteiner>
  );
};

export default Cart;