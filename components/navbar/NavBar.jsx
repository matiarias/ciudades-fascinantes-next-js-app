import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import navbarImg from "../../public/navbar-image-2.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            background: "transparent",
            backdropFilter: "blur(15px)",
          }}
        >
          <Toolbar sx={{ height: "80px", gap: "12px" }}>
            <Image
              src={navbarImg}
              alt="navbar image viajes"
              height={60}
              width={60}
              style={{ objectFit: "cover" }}
            />

            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Ciudades Fascinantes
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default NavBar;
