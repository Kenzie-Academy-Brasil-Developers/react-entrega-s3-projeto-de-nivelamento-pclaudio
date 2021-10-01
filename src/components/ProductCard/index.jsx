import { useEffect, useState } from "react";
import PricesDisplay from "../PricesDisplay";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const ProductCard = ({
  product,
  selectedProducts,
  setSelectedProducts,
  toBuy,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (toBuy) {
      const isSelected = selectedProducts.some(
        (selectedProduct) => selectedProduct.code === product.code
      );

      setIsDisabled(isSelected);
    }

    // eslint-disable-next-line
  }, [selectedProducts]);

  const handleAction = () => {
    if (toBuy) {
      setSelectedProducts([...selectedProducts, product]);
    } else {
      setSelectedProducts(
        selectedProducts.filter(
          (selectedProduct) => selectedProduct.code !== product.code
        )
      );
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {product.code}
        </Typography>

        <Typography variant="h5" component="div">
          {product.name}
        </Typography>

        <hr />

        <Typography variant="body2">{product.description}</Typography>

        <hr />

        <PricesDisplay
          total={product.price}
          totalWithDiscount={product.price - product.discount}
          discount={product.discount}
        />
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          color={toBuy ? "success" : "error"}
          disabled={isDisabled}
          fullWidth
          onClick={handleAction}
        >
          {toBuy ? "Comprar" : "Remover"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
