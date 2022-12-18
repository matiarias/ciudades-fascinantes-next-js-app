import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorLogIn, setErrorLogIn] = useState("");

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {
      setErrorLogIn(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Ciudades Fascinantes - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <Image
          style={{ objectFit: "cover", objectPosition: "center" }}
          fill
          src="https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg"
          priority
          alt="ciudad costera"
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "rgba(0,0,0,0.6)",
            paddingX: "24px",
          }}
        >
          <Card sx={{ width: { xs: "100%", sm: 420, md: 450, lg: 500 } }}>
            <CardMedia
              component="img"
              height="130"
              image="https://images.pexels.com/photos/4987276/pexels-photo-4987276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="italia"
            />

            <CardContent component="div">
              <Typography gutterBottom variant="h5" align="center">
                Iniciar Sesión
              </Typography>

              {errorLogIn && <Alert severity="error">{errorLogIn}</Alert>}

              <Box onSubmit={handleSubmit} component="form">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  variant="outlined"
                  color="error"
                  fullWidth={true}
                  sx={{ marginBottom: "10px" }}
                  value={email}
                  onChange={handleChangeEmail}
                />

                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  color="error"
                  fullWidth={true}
                  value={password}
                  onChange={handleChangePassword}
                />

                <CardActions>
                  <Button
                    sx={{ marginY: "10px" }}
                    variant="contained"
                    color="error"
                    fullWidth={true}
                    endIcon={<LoginIcon />}
                    type="submit"
                  >
                    Inicar
                  </Button>
                </CardActions>
              </Box>

              <Typography variant="body1" align="center">
                Inicia Sesión con
              </Typography>

              <Stack
                component="div"
                direction="row"
                justifyContent="center"
                alignItems="center"
                marginY={1}
              >
                <Button
                  variant="contained"
                  startIcon={<GoogleIcon />}
                  color="warning"
                >
                  Google
                </Button>
              </Stack>

              <Box textAlign="center">
                <Typography gutterBottom variant="body2" component="span">
                  ¿Ya estás registrado?
                </Typography>
                <Link
                  style={{
                    color: "#ae0000",
                    fontWeight: "bold",
                    marginLeft: "8px",
                  }}
                  href="/signup/signup"
                >
                  Registrarse
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Login;
