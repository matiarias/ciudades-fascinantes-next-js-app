import { useEffect, useState } from "react";
import axios from "axios";

import { Cards } from "../cards/Cards";

import {
  Container,
  Grid,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";

const InfoCards = () => {
  const [cardsData, setCardsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const res = await axios.get("https://restcountries.com/v3.1/region/europe");
    console.log(res.data);
    setCardsData(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ marginY: "24px", fontWeight: "700" }}
        >
          Explora sobre las Mejores Ciudades del Mundo
        </Typography>

        {isLoading ? (
          <Box sx={{ textAlign: "center", marginY: "20px" }}>
            <CircularProgress color="success" size={60} thickness={6} />
          </Box>
        ) : (
          <Box>
            <Grid
              container
              spacing={6}
              columns={{ xs: 12, sm: 4, md: 4 }}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              {cardsData.map((card) => (
                <Cards key={card?.name.official} card={card} />
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </section>
  );
};

export default InfoCards;
