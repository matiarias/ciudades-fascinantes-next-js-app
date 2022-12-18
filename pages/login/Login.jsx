import Head from "next/head";
import Link from "next/link";
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
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "24px",
          background: "#afafaf",
        }}
      >
        <Card sx={{ width: { xs: "100%", sm: "100%", md: 400, lg: 500 } }}>
          <CardMedia
            component="img"
            height="150"
            image="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
            alt="beach"
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
                color="primary"
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
                color="primary"
                fullWidth={true}
                value={password}
                onChange={handleChangePassword}
              />

              <CardActions>
                <Button
                  sx={{ marginY: "10px" }}
                  variant="contained"
                  color="primary"
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
                color="error"
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
                  color: "blue",
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
    </>
  );
};

export default Login;
