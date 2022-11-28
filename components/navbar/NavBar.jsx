// import styles from "./NavBar.module.css";

import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";

import MovieFilterIcon from "@mui/icons-material/MovieFilter";

const NavBar = () => {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: "linear-gradient(to right, #007731, #003200)" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MovieFilterIcon fontSize="large" />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              PelisSJ
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default NavBar;
