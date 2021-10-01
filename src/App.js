import "@fontsource/roboto";
import { useEffect, useState } from "react";
import productsDB from "./services/db";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import ApplicationBar from "./components/ApplicationBar";
import ProductForm from "./components/ProductForm";
import ProductsDisplay from "./components/ProductsDisplay";
import ShoppingCart from "./components/ShoppingCart";
import ShoppingCartResults from "./components/ShoppingCartResults";
import theme from "./styles/theme";

const App = () => {
  const [showHome, setShowHome] = useState(true);

  const [products, setProducts] = useState(productsDB);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [counterSelectedProducts, setCounterSelectedProducts] = useState(0);

  useEffect(() => {
    setCounterSelectedProducts(selectedProducts.length);
  }, [selectedProducts]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ApplicationBar
        showHome={showHome}
        setShowHome={setShowHome}
        counterSelectedProducts={counterSelectedProducts}
      />

      <Container sx={{ marginTop: "20px" }} maxWidth="xl">
        {showHome ? (
          <>
            <ProductForm products={products} setProducts={setProducts} />
            <ProductsDisplay
              products={products}
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
            />
          </>
        ) : (
          <>
            <ShoppingCart
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
            />
            <ShoppingCartResults selectedProducts={selectedProducts} />
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
