import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import {
  Box,
  Stack,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const CardId = () => {
  const [country, setCountry] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const params = router.query;

  const fetchCountry = async (id) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);

      const result = await res.json();

      console.log(result);
      setCountry(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCountry(params.id);
    }, 3000);
  }, [params.id]);

  return (
    <>
      {isLoading ? (
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
      ) : (
        <Box sx={{ position: "relative", minHeight: "100vh", width: "100%" }}>
          <Image
            src={country[0]?.flags.png}
            alt={country[0]?.name.official}
            fill
            style={{ objectFit: "cover" }}
          />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              bgcolor: "rgba(0,0,0,0.8)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              paddingX: "16px",
            }}
          >
            <Card sx={{ width: 700, backgroundColor: "darkgrey" }}>
              <CardMedia
                component="img"
                height="200"
                image={country[0]?.coatOfArms.png}
                alt={country[0]?.name.official}
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5">
                    {country[0]?.name.official}
                  </Typography>

                  <Typography variant="h5">
                    Región: {country[0]?.region}
                  </Typography>

                  <Typography variant="h5">
                    Capital: {country[0]?.capital}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={2}
                >
                  <Typography variant="h5">
                    Habitantes: {country[0]?.population}
                  </Typography>

                  <Typography variant="h5">Idioma:</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CardId;
