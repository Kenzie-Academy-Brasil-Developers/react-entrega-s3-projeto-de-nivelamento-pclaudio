import { Grid, Typography } from "@mui/material";
import ProductCard from "../ProductCard";

const ShoppingCart = ({ selectedProducts, setSelectedProducts }) => {
  return (
    <>
      {selectedProducts.length > 0 ? (
        <Grid container spacing={2}>
          {selectedProducts.map((product) => (
            <Grid key={product.code} item xs={12} md={4} lg={3}>
              <ProductCard
                product={product}
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h4" component="h2" sx={{ textAlign: "center" }}>
          Carrinho vazio.
        </Typography>
      )}
    </>
  );
};

export default ShoppingCart;
