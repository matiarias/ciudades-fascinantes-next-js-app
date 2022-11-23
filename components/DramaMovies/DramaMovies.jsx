import Image from "next/image";
import Movie1 from "../../public/assets/cinema-paradiso.jpg";
import Movie2 from "../../public/assets/sin_novedad_en_el_frente.jpg";
import Movie3 from "../../public/assets/dunkerque.jpg";

import { Container, Grid, Box, Typography } from "@mui/material";

const DramaMovies = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <Typography variant="h4" my={2}>
          Drama
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ height: 300, width: 300, position: "relative" }}>
              <Image
                style={{ objectFit: "contain" }}
                src={Movie1}
                alt="cinema paradiso"
                fill
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ height: 300, width: 300, position: "relative" }}>
              <Image
                style={{ objectFit: "contain" }}
                src={Movie2}
                alt="sin novedad en el frente"
                fill
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ height: 300, width: 300, position: "relative" }}>
              <Image
                style={{ objectFit: "contain" }}
                src={Movie3}
                alt="dunkerque"
                fill
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default DramaMovies;
