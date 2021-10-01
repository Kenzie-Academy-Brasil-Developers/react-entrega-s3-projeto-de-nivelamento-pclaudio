import { Home, MonetizationOn, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ApplicationBar = ({ showHome, setShowHome, counterSelectedProducts }) => {
  const handleToggle = () => {
    setShowHome(!showHome);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }}>
            <MonetizationOn />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" } }}
          >
            TELEVENDAS
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { md: "flex" } }}>
            <IconButton size="large" color="inherit" onClick={handleToggle}>
              {showHome ? (
                <Badge badgeContent={counterSelectedProducts} color="error">
                  <ShoppingCart />
                </Badge>
              ) : (
                <Home />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ApplicationBar;
