import { Grid } from "@mui/material";
import ProductCard from "../ProductCard";

const ProductsDisplay = ({
  products,
  selectedProducts,
  setSelectedProducts,
}) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.code} item xs={12} md={4} lg={3}>
          <ProductCard
            product={product}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            toBuy
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsDisplay;
