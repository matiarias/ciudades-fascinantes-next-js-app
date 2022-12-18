import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";

const SignUp = () => {
  const { signUp } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

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
      await signUp(email, password);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Ciudades Fascinantes - SignUp</title>
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
          src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          priority
          alt="tailandia"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "rgba(0,0,0,0.6)",
            paddingX: "24px",
          }}
        >
          <Card sx={{ width: { xs: "100%", sm: "100%", md: 400, lg: 500 } }}>
            <CardMedia
              component="img"
              height="150"
              image="https://images.unsplash.com/photo-1587714498387-7bec44b919aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="indonesia beach"
            />
            <CardContent component="div">
              <Typography gutterBottom variant="h5" align="center">
                Registrarse
              </Typography>

              <Box
                onSubmit={handleSubmit}
                component="form"
                sx={{ padding: "10px" }}
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  variant="outlined"
                  color="success"
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
                  color="success"
                  fullWidth={true}
                  value={password}
                  onChange={handleChangePassword}
                />

                <CardActions>
                  <Button
                    sx={{ marginY: "12px" }}
                    variant="contained"
                    color="success"
                    fullWidth={true}
                    endIcon={<LoginIcon />}
                    type="submit"
                  >
                    Registrarse
                  </Button>
                </CardActions>
              </Box>

              <Box textAlign="center">
                <Typography gutterBottom variant="body2" component="span">
                  Si ya estas registrado
                </Typography>
                <Link
                  style={{
                    color: "darkgreen",
                    fontWeight: "bold",
                    marginLeft: "8px",
                  }}
                  href="/login/login"
                >
                  Inicia Sesión
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
