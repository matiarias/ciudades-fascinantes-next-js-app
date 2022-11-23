import Image from "next/image";
import Movie1 from "../../public/assets/smile-movie.jpg";
import Movie2 from "../../public/assets/halloween-el-final.jpg";
import Movie3 from "../../public/assets/black-phone.jpg";

import { Container, Grid, Box, Typography } from "@mui/material";

const TerrorMovies = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <Typography variant="h4" my={2}>
          Terror
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ height: 300, width: 300, position: "relative" }}>
              <Image
                style={{ objectFit: "contain" }}
                src={Movie1}
                alt="smile movie"
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ height: 300, width: 300, position: "relative" }}>
              <Image
                style={{ objectFit: "contain" }}
                src={Movie2}
                alt="halloween el final"
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ height: 300, width: 300, position: "relative" }}>
              <Image
                style={{ objectFit: "contain" }}
                src={Movie3}
                alt="black phone"
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default TerrorMovies;
