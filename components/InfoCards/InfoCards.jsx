import { useEffect, useState } from "react";

import dataCards from "../../utils/dataCards.json";

import {
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CircularProgress,
} from "@mui/material";

const InfoCards = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(dataCards);
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
              {data.map((item, index) => (
                <Grid key={index} item>
                  <Card sx={{ maxWidth: 350 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={item.img}
                        alt={item.title}
                      />
                      <CardContent sx={{ background: "#555", color: "white" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2">
                          {item.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </section>
  );
};

export default InfoCards;
