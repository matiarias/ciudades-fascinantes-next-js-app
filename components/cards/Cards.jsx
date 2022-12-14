import Link from "next/link";

import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

export const Cards = ({ card }) => {
  return (
    <>
      <Grid item>
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            component="img"
            height="200"
            image={card?.flags.png}
            alt={card.title}
          />
          <CardContent sx={{ background: "#333", color: "white" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {card?.name.official}
            </Typography>

            <Typography variant="body1" align="center">
              Capital: {card?.capital}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
