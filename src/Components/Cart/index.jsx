// import { useDispatch } from "react-redux";
// import { removeFromCart } from "../../store/modules/Cart/actions";
// import { removeToCardThunk } from "../../store/modules/Cart/thunks";
// import Button from "../Button";
// import {useState} from "react"
import { useCart } from "../../Providers/Cart";
import ProductCart from "../ProductCart";

import { Conteiner } from "./style";

const Cart = ({showcart}) => {

  //AQUI EU FAÇO UM MAP PARA MOSTRAR TODOS OS PRODUTOS DENTRO DO CARRINHO
  // CHAMO O COMPONENTE PRODUCTCART
  const {cart} = useCart()


  return (
    <Conteiner showCart={showcart}>
      <h2>Products Cart</h2>
      <ul>
      {cart.map((item) => {
        console.log("coi",item)
        return (
          <li>
          <ProductCart name={item.name} price={item.price} image={item.image}/>
          </li>
        )
      }).splice(-1)}
      </ul>
    </Conteiner>
  );
};

export default Cart;