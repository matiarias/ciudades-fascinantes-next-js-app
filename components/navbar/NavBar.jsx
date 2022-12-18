import Image from "next/image";
import Link from "next/link";

import { useAuth } from "../../hooks/useAuth";

import {
  Box,
  Stack,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";

import navbarImg from "../../public/navbar-image-2.png";

const NavBar = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

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
          <Toolbar
            sx={{
              height: "70px",
              gap: "12px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Link href="/">
                <Image
                  src={navbarImg}
                  alt="navbar image viajes"
                  height={60}
                  width={60}
                  style={{ objectFit: "cover" }}
                />
              </Link>

              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#00bf00" }}
              >
                Ciudades Fascinantes
              </Typography>
            </Stack>

            {user ? (
              <Stack direction="row" spacing={3}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Avatar
                    alt={user?.email}
                    src={user?.photoURL}
                    srcSet={user?.photoURL}
                  />

                  <Typography variant="body1" component="span">
                    {user?.email}
                  </Typography>

                  <Button
                    onClick={handleLogOut}
                    variant="contained"
                    color="warning"
                    size="small"
                  >
                    Cerrar Sesión
                  </Button>
                </Stack>
              </Stack>
            ) : (
              <Stack direction="row" spacing={2}>
                <Link href="/login/login">
                  <Button variant="contained" color="success" size="small">
                    Inicia Sesión
                  </Button>
                </Link>

                <Link href="/signup/signup">
                  <Button variant="contained" color="error" size="small">
                    Registrarse
                  </Button>
                </Link>
              </Stack>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default NavBar;
