import Header from "../../Header";
import GlobalStyle from "../../styles/Global"
// import { useCatalogue } from "./Providers/Products";
import ProductsList from "../../ProductsList"
// import CartPage from "./Components/CartPage";

function ProductsPage() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductsList/>
    </>
  );
}

export default ProductsPage;
