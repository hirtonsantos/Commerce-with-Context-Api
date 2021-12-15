import { CartProvider } from "./Cart";
import { CatalogueProvider } from "./Products";

const Providers = ({ children }) => {
  return (
    <CartProvider>
      <CatalogueProvider>{children}</CatalogueProvider>
    </CartProvider>
  );
};

export default Providers;
