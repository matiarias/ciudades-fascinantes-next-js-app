import Image from "next/image";
import Movie1 from "../../public/assets/top-gun-maverick.jpg";
import Movie2 from "../../public/assets/enola-holes-2.jpg";
import Movie3 from "../../public/assets/jurassic-world-dominion.jpg";

import { Container, Grid, Box, Typography } from "@mui/material";

const PopularMovies = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Popular
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3, md: 1 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ height: 300, width: 300, position: "relative" }}>
              <Image
                style={{ objectFit: "contain" }}
                src={Movie1}
                alt="top gun maverick"
                fill
                priority
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ height: 300, width: 300, position: "relative" }}>
              <Image
                style={{ objectFit: "contain" }}
                src={Movie2}
                alt="enola holmes"
                fill
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                height: 300,
                width: 300,
                position: "relative",
              }}
            >
              <Image
                style={{ objectFit: "contain" }}
                src={Movie3}
                alt="jurassic world dominion"
                fill
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default PopularMovies;
