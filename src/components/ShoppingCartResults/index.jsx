import { useEffect, useState } from "react";
import { ResultContainer, ResultContent } from "./styles";
import PricesDisplay from "../PricesDisplay";

const ShoppingCartResults = ({ selectedProducts }) => {
  const [total, setTotal] = useState(0);

  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (selectedProducts.length !== 0) {
      setTotal(
        selectedProducts
          .map((selectedProduct) => selectedProduct.price)
          .reduce((previousValue, currentValue) => previousValue + currentValue)
      );

      setDiscount(
        selectedProducts
          .map((selectedProduct) => selectedProduct.discount)
          .reduce((previousValue, currentValue) => previousValue + currentValue)
      );
    } else {
      setTotal(0);
      setDiscount(0);
    }
  }, [selectedProducts]);

  return (
    <ResultContainer>
      <ResultContent>
        <PricesDisplay
          total={total}
          totalWithDiscount={total - discount}
          discount={discount}
        />
      </ResultContent>
    </ResultContainer>
  );
};

export default ShoppingCartResults;
