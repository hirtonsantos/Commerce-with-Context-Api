// import { useCart } from "../../Providers/Cart"
import {Image, Description} from "./style"

const ProductCart = ({name, price, image}) => {

    // irá receber como props o nome, o preço e uma função para remover do cart
    // aqui criará um button tbm
    // const {removeFromCart} = useCart()

    // console.log(image)

    return (
        <>
        <Image>
        <img src={image} alt={name} />
        </Image>

        <Description>
        <span>{name}</span>
        <span>{price} R$</span>
        </Description>

        {/* <button onClick={() => removeFromCart(name)}>
            Remover do carrinho
        </button> */}
        </>
    )
}

export default ProductCart