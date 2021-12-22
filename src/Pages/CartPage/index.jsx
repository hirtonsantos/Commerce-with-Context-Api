import {Content , Conteiner , Button, BoxButton, BoxContent, BoxText, BoxFigure, Section, SectionBox, Description} from "./style"
import { useCart } from "../../Providers/Cart";
import { useHistory } from "react-router";
import { useState } from "react";

const CartPage = () => {

  const [changeColor] = useState(false)
  const {removeFromCart, onchange} = useCart()
  const history = useHistory("/")

  const productsList = JSON.parse(localStorage.getItem("cart")) || [];

  const semRepetidos = productsList.filter(function(el, i) {
    return productsList.indexOf(el) === i;
  });

  const newCartSom = productsList.reduce((acc, curr) => {
    return acc + curr.price
  }, 0 )

  console.log(changeColor)

  return (
      <Conteiner> 
        <Content>
    <BoxContent>

      <BoxButton>
            <div className="button-conteiner">
                <Button onClick={() => history.push("/")} changeColor> Continuar Comprando </Button>
            </div>
      </BoxButton>

      <BoxText>
        <h2> Carrinho </h2>
        <h3>Total: {newCartSom.toFixed(2)}</h3>
      </BoxText>

      <BoxButton>
          <div className="button-conteiner">
        <Button onClick={onchange}>Fechar carrinho </Button>
        </div>
      </BoxButton>

    </BoxContent>

    <main> 
  {semRepetidos.map((item) => {
    return (
    <Section>
    <SectionBox >

        <BoxFigure>
        <figure><img src={item.image} alt={item.name} /></figure>
        </BoxFigure>

        <Description>
            <p>{item.name}</p>
        </Description>

        <div className="PRICESSS" /* PriceBox */>
            <p>{(item.price).toFixed(2)}</p>
        </div>
        <Button onClick={() => removeFromCart(item.id)}>REMOVER</Button>
        </SectionBox>
    </Section>
  )})}
  </main>
  </Content>
    </Conteiner>
  );
};

export default CartPage;
