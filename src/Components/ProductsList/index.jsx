import ProductCard from "../ProductCard"
import { useCatalogue } from "../../Providers/Products";
import { useCart } from "../../Providers/Cart";
import {Conteiner, Content} from "./style"
// import Cart from "../Cart";


const ProductsList = () => {

  const {catalogue} = useCatalogue()
  const {cart} = useCart()

    console.log("cart", cart)

    return (
        <Conteiner>
            <Content>
        {catalogue.map((item) => {
            return (
                    <ProductCard
                    id={item.id}
                    description={item.description}
                    name={item.name} 
                    price={item.price}
                    image={item.image}
                    item={item}
                    />
                    )
                })}
                </Content>
        </Conteiner>    
    )
}

export default ProductsList;