// import { useDispatch } from "react-redux";
// import { removeFromCart } from "../../store/modules/Cart/actions";
// import { removeToCardThunk } from "../../store/modules/Cart/thunks";
// import Button from "../Button";
// import {useState} from "react"
import { useHistory } from "react-router";
import ProductCart from "../ProductCart";

import { Conteiner } from "./style";

const Cart = ({showcart}) => {

  const history = useHistory()

  const productsList = JSON.parse(localStorage.getItem("cart")) || [];

  const newCartSom = productsList.reduce((acc, curr) => {
    return acc + curr.price
  }, 0 )

  return (
    <Conteiner showCart={showcart}>
      <h2>Products Cart - <span>{newCartSom.toFixed(2)}</span></h2>
      <ul>
      {productsList.map((item) => {
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