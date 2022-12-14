import { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { Box, Typography, CircularProgress, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CardId = () => {
  const [country, setCountry] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const params = router.query;

  const fetchCountry = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://restcountries.com/v3.1/alpha/${params.id}`,
      });
      console.log(res.data);
      setCountry(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

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
            style={{ objectFit: "cover", objectPosition: "center" }}
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
            <Link href="/">
              <Button
                variant="contained"
                size="large"
                startIcon={<ArrowBackIcon />}
                sx={{
                  position: "absolute",
                  top: "100px",
                  left: "20px",
                  backgroundColor: "#cecece",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#7a7a7a",
                  },
                }}
              >
                Inicio
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CardId;
