import useSWR from "swr";
import axios from "axios";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import {
  Box,
  Stack,
  Typography,
  CircularProgress,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CardId = () => {
  const router = useRouter();
  const params = router.query;

  const fetcher = () => {
    return axios
      .get(`https://restcountries.com/v3.1/alpha/${params.id}`)
      .then((response) => response.data);
  };

  const { data, isLoading, error } = useSWR(
    `https://restcountries.com/v3.1/alpha/${params.id}`,
    fetcher
  );

  if (error)
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "1rem",
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
          Error al cargar la información
        </Typography>
      </Box>
    );

  if (isLoading)
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress color="success" size={60} thickness={6} />
      </Box>
    );

  return (
    <>
      <Head>
        <title>Pais: {params.id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ position: "relative", minHeight: "100vh", width: "100%" }}>
        <Image
          src={data[0]?.flags?.png}
          alt={data[0]?.name?.official}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            bgcolor: "rgba(0,0,0,0.6)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            paddingX: "16px",
          }}
        >
          <Link href="/">
            <Button
              variant="contained"
              size="medium"
              startIcon={<ArrowBackIcon />}
              sx={{
                position: "absolute",
                top: { xs: 90, sm: 100 },
                left: "20px",
                backgroundColor: "#cecece",
                color: "black",
                boxShadow: "2px 2px 4px #ababab",
                "&:hover": {
                  backgroundColor: "#7a7a7a",
                  boxShadow: "2px 2px 4px #cecece",
                },
              }}
            >
              Inicio
            </Button>
          </Link>

          <Card
            sx={{
              width: { xs: "100%", sm: 400, md: 500 },
              padding: "16px 8px",
              backgroundColor: "rgba(250,250,250,0.8)",
            }}
          >
            <CardMedia
              component="img"
              height="150"
              image={data[0]?.coatOfArms?.png}
              alt={data[0]?.name?.official}
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {data?.name?.official}
                </Typography>

                <Typography
                  variant="body1"
                  align="center"
                  sx={{ color: "#333", fontWeight: "bold" }}
                >
                  Capital:{" "}
                  <Box
                    component="span"
                    sx={{ color: "darkgreen", fontWeight: "bold" }}
                  >
                    {data[0]?.capital}
                  </Box>
                </Typography>

                <Typography
                  variant="body1"
                  align="center"
                  sx={{ color: "#333", fontWeight: "bold" }}
                >
                  Región:{" "}
                  <Box
                    component="span"
                    sx={{ color: "darkgreen", fontWeight: "bold" }}
                  >
                    {data[0]?.region}
                  </Box>
                </Typography>

                <Typography
                  variant="body1"
                  align="center"
                  sx={{ color: "#333", fontWeight: "bold" }}
                >
                  Sub Región:{" "}
                  <Box
                    component="span"
                    sx={{ color: "darkgreen", fontWeight: "bold" }}
                  >
                    {data[0]?.subregion}
                  </Box>
                </Typography>

                <Typography
                  variant="body1"
                  align="center"
                  sx={{ color: "#333", fontWeight: "bold" }}
                >
                  Habitantes:{" "}
                  <Box
                    component="span"
                    sx={{ color: "darkgreen", fontWeight: "bold" }}
                  >
                    {data[0]?.population}
                  </Box>
                </Typography>
              </Stack>
            </CardContent>

            <Typography
              variant="body2"
              component="h6"
              align="center"
              sx={{ color: "#333", fontWeight: "bold" }}
            >
              Paises Limitrofes
            </Typography>

            <CardActions>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                flexWrap="wrap"
                gap={{ xs: 2, sm: 1 }}
              >
                {data[0]?.borders?.map((item) => (
                  <Link key={item} href="/country/[id]" as={`/country/${item}`}>
                    <Button variant="contained" color="success" size="small">
                      {item}
                    </Button>
                  </Link>
                ))}
              </Stack>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default CardId;
