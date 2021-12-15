import { Switch, Route } from "react-router-dom"
// import CartPage from "../Pages/CartPage"
import ProductsPage from "../Pages/ProductsPage"

function Routes (){

    return(
        <Switch>
            <Route exact path="/">
                <ProductsPage/>
            </Route>

            {/* <Route path="/CartPage">
                <CartPage/>
            </Route> */}
        </Switch>
    )
}

export default Routes