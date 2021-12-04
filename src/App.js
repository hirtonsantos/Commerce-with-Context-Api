import Header from "./Components/Header";
import GlobalStyle from "./Components/styles/Global";
// import { useCatalogue } from "./Providers/Products";
import ProductsList from "./Components/ProductsList"

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductsList/>
    </>
  );
}

export default App;
