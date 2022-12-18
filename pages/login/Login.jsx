import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

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
import FacebookIcon from "@mui/icons-material/Facebook";

const Login = () => {
  const { logIn, googleLogIn, facebookLogIn } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorLogIn, setErrorLogIn] = useState("");

  const router = useRouter();

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await logIn(email, password);
      router.push("/");
    } catch (error) {
      setErrorLogIn(error.message);
    }
  };

  const handleGoogleLogIn = async () => {
    try {
      await googleLogIn();
      router.push("/");
    } catch (error) {
      console.log(err);
    }
  };

  const handleFacebookLogIn = async () => {
    try {
      await facebookLogIn();
      router.push("/");
    } catch (error) {
      console.log(err);
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

              {errorLogIn && (
                <Alert
                  sx={{ marginY: "16px" }}
                  severity="error"
                  variant="standard"
                >
                  {errorLogIn}
                </Alert>
              )}

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
                spacing={2}
                marginY={1}
              >
                <Button
                  onClick={handleGoogleLogIn}
                  variant="contained"
                  startIcon={<GoogleIcon />}
                  color="warning"
                >
                  Google
                </Button>

                <Button
                  onClick={handleFacebookLogIn}
                  variant="contained"
                  startIcon={<FacebookIcon />}
                  color="primary"
                >
                  Facebook
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
