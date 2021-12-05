// import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Components/Pages/Routes";
// import GlobalStyle from "./Components/styles/Global";
// import { useCatalogue } from "./Providers/Products";
// import ProductsList from "./Components/ProductsList"
// import CartPage from "./Components/CartPage";

function App() {

  return (
    <>
      {/* <GlobalStyle /> */}
      {/* <Header />
      <ProductsList/> */}
      {/* <CartPage/> */}
      <BrowserRouter>
      <Routes/>
      </BrowserRouter>
    </>
  );
}

export default App;
