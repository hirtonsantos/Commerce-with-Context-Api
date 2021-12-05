import { Switch, Route } from "react-router-dom"
import CartPage from "../CartPage"
import ProductsPage from "../ProductsPage"

function Routes (){


    return(
        <Switch>
            <Route exact path="/">
                <ProductsPage/>
            </Route>

            <Route path="/CartPage">
                <CartPage/>
            </Route>
        </Switch>
    )
}

export default Routes