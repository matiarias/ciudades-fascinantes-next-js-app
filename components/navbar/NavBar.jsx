import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import {
  Box,
  Stack,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import navbarImg from "../../public/navbar-image-2.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const { user, logOut } = useAuth();
  // console.log(user);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickNav = () => {
    setNav(!nav);
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
          {/* ---------------------------- Desktop Menu ------------------------------ */}

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
              <Stack
                sx={{ display: { xs: "none", md: "block" } }}
                direction="row"
                spacing={3}
              >
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
              <Stack
                sx={{ display: { xs: "none", md: "block" } }}
                direction="row"
                spacing={2}
              >
                <Link href="/login/login">
                  <Button variant="contained" color="success" size="small">
                    Iniciar Sesión
                  </Button>
                </Link>

                <Link href="/signup/signup">
                  <Button variant="contained" color="error" size="small">
                    Registrarse
                  </Button>
                </Link>
              </Stack>
            )}

            {/* ------------------------- Hamburger Menu --------------------------- */}

            {matches && (
              <Box
                onClick={handleClickNav}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!nav ? (
                  <IconButton>
                    <MenuIcon sx={{ color: "#00bf00" }} fontSize="large" />
                  </IconButton>
                ) : (
                  <IconButton>
                    <CloseIcon sx={{ color: "#00bf00" }} fontSize="large" />
                  </IconButton>
                )}
              </Box>
            )}

            {/* ------------------------------ Mobile Menu ------------------------------- */}

            {matches && (
              <Drawer open={nav} onClose={() => setNav(false)}>
                <Box
                  sx={{
                    position: "relative",
                    height: "100vh",
                    width: { xs: "80vw", sm: "50vw" },
                  }}
                >
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1568684333877-4d39f2c871c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    }
                    alt="Tokyo night"
                    fill
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "16px",
                      paddingX: "12px",
                    }}
                  >
                    {user ? (
                      <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                      >
                        <Stack
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={3}
                        >
                          <Avatar
                            alt={user?.email}
                            src={user?.photoURL}
                            srcSet={user?.photoURL}
                            sx={{ height: "60px", width: "60px" }}
                          />

                          <Typography
                            variant="body1"
                            component="span"
                            sx={{ fontWeight: "bold", color: "#dfdfdf" }}
                          >
                            {user?.email}
                          </Typography>

                          <Button
                            onClick={handleLogOut}
                            variant="contained"
                            color="secondary"
                            size="small"
                          >
                            Cerrar Sesión
                          </Button>
                        </Stack>
                      </Stack>
                    ) : (
                      <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                      >
                        <Link href="/login/login">
                          <Button
                            onClick={handleClickNav}
                            variant="contained"
                            color="secondary"
                            size="small"
                          >
                            Iniciar Sesión
                          </Button>
                        </Link>

                        <Link href="/signup/signup">
                          <Button
                            onClick={handleClickNav}
                            variant="contained"
                            color="warning"
                            size="small"
                          >
                            Registrarse
                          </Button>
                        </Link>
                      </Stack>
                    )}
                  </Box>
                </Box>
              </Drawer>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default NavBar;
