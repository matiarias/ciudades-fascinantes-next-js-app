import { useEffect, useState } from "react";

import dataCards from "../../utils/dataCards.json";

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

  useEffect(() => {
    setTimeout(() => {
      setCardsData(dataCards);
      setIsLoading(false);
    }, 3000);
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
                <Cards key={card.title} card={card} />
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </section>
  );
};

export default InfoCards;
