import { CartProvider } from "./Cart";
import { CatalogueProvider } from "./Products";

const Providers = ({ children }) => {
  return (
    <CatalogueProvider>
      <CartProvider>{children}</CartProvider>
    </CatalogueProvider>
  );
};

export default Providers;
