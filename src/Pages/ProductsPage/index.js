import GlobalStyle from "../../styles/Global"
import ProductsList from "../../Components/ProductsList"
import Header from "../../Components/Header"

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
