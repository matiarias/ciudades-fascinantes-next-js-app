import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

export const Cards = ({ card }) => {
  return (
    <>
      <Grid item>
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={card.img}
              alt={card.title}
            />
            <CardContent sx={{ background: "#555", color: "white" }}>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};
