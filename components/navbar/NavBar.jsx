// import styles from "./NavBar.module.css";

import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";

import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

const NavBar = () => {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: "linear-gradient(to right, #002311, #003713)" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AirplanemodeActiveIcon fontSize="large" />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ fontWeight: "700" }}>
              Ciudades Fascinantes
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default NavBar;
