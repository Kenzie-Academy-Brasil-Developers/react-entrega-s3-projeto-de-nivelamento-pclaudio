import { useEffect, useState } from "react";
import { FormContainer } from "./styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";

const nextFreeCode = (products) => {
  if (products.length > 0) {
    const codes = products.map((product) => product.code);

    for (let nextCode = 1; ; nextCode++) {
      if (!codes.some((code) => code === nextCode)) {
        return nextCode;
      }
    }
  } else {
    return 1;
  }
};

const resetProduct = (products) => ({
  code: nextFreeCode(products),
  name: "",
  description: "",
  price: 0.0,
  discount: 0.0,
});

const ProductForm = ({ products, setProducts }) => {
  const [product, setProduct] = useState(resetProduct(products));

  const [open, setOpen] = useState(false);

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setProduct(resetProduct(products));
  }, [products]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  const handleNameChange = (event) => {
    setProduct({ ...product, name: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setProduct({ ...product, description: event.target.value });
  };

  const handlePriceChange = (event) => {
    setProduct({ ...product, price: parseFloat(event.target.value) });
  };

  const handleDiscountChange = (event) => {
    setProduct({ ...product, discount: parseFloat(event.target.value) });
  };

  const handleSaveForm = () => {
    const messages = [];

    if (product.name.trim() === "") {
      messages.push("O nome do produto é obrigatório");
    }

    if (product.description.trim() === "") {
      messages.push(errors, "A descrição do produto é obrigatória");
    }

    if (parseFloat(product.price) <= 0) {
      messages.push("O valor do produto não pode ser zero ou negativo");
    }

    if (parseFloat(product.discount) <= 0) {
      messages.push(
        "O valor do desconto do produto não pode ser zero ou negativo"
      );
    }

    if (parseFloat(product.price) <= parseFloat(product.discount)) {
      messages.push(
        "O preço do produto não pode ser igual ou menor do que o desconto"
      );
    }

    setErrors(messages);

    if (messages.length > 0) {
      setOpen(true);
    } else {
      setProducts([...products, product]);
    }
  };

  const handleCleanForm = () => {
    setProduct(resetProduct(products));
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setErrors([]);
  };

  return (
    <FormContainer>
      <Card sx={{ width: "100%", maxWidth: "700px" }}>
        <form onSubmit={handleOnSubmit}>
          <CardContent>
            <div className="flexInputs">
              <TextField
                className="codeInput input"
                label="Código"
                variant="outlined"
                size="small"
                disabled
                value={product.code}
              />

              <TextField
                className="nameInput input"
                label="Nome do produto"
                variant="outlined"
                size="small"
                autoFocus
                value={product.name}
                onChange={handleNameChange}
              />
            </div>

            <TextField
              className="input"
              label="Descrição"
              size="small"
              multiline
              rows={4}
              fullWidth
              value={product.description}
              onChange={handleDescriptionChange}
            />

            <div className="flexInputs">
              <TextField
                className="pricesInput input"
                label="Preço"
                variant="outlined"
                type="number"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">R$</InputAdornment>
                  ),
                }}
                value={product.price}
                onChange={handlePriceChange}
              />

              <TextField
                className="pricesInput input"
                label="Desconto"
                variant="outlined"
                type="number"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">R$</InputAdornment>
                  ),
                }}
                value={product.discount}
                onChange={handleDiscountChange}
              />
            </div>
          </CardContent>

          <CardActions>
            <div className="buttonsContainer">
              <Button
                className="buttons"
                type="submit"
                variant="contained"
                color="success"
                onClick={handleSaveForm}
              >
                Salvar
              </Button>

              <Button
                className="buttons"
                variant="contained"
                color="error"
                onClick={handleCleanForm}
              >
                Limpar
              </Button>
            </div>
          </CardActions>
        </form>
      </Card>

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Erro ao cadastrar produto</DialogTitle>

        <DialogContent>
          {errors.map((error, index) => (
            <DialogContentText key={index}>{error}</DialogContentText>
          ))}
        </DialogContent>

        <DialogActions>
          <div className="buttonsContainer">
            <Button
              className="buttons"
              variant="contained"
              color="error"
              onClick={handleCloseDialog}
            >
              Fechar
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </FormContainer>
  );
};

export default ProductForm;
