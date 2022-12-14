import Link from "next/link";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export const SingleCard = ({ card }) => {
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

            <Link href="/country/[id]" as={`/country/${card?.cca2}`}>
              <Button
                sx={{ marginTop: "20px" }}
                variant="contained"
                color="success"
                fullWidth={true}
                startIcon={<TravelExploreIcon />}
              >
                Más Información
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
