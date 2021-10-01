import { Typography } from "@mui/material";

const PricesDisplay = ({ total, totalWithDiscount, discount }) => {
  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <>
      <Typography
        sx={{
          fontSize: 16,
          textAlign: "right",
          textDecoration: "line-through",
        }}
        color="text.secondary"
        gutterBottom
      >
        {formatCurrency(total)}
      </Typography>

      <Typography sx={{ fontSize: 22, textAlign: "right" }} gutterBottom>
        {formatCurrency(totalWithDiscount)}
      </Typography>

      <Typography sx={{ fontSize: 18, textAlign: "right" }} gutterBottom>
        {`Economize ${formatCurrency(discount)}`}
      </Typography>
    </>
  );
};

export default PricesDisplay;
