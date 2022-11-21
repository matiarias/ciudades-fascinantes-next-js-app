import Image from "next/image";
import Movie1 from "../../public/assets/top-gun-maverick.jpg";
import Movie2 from "../../public/assets/enola-holes-2.jpg";
import Movie3 from "../../public/assets/jurassic-world-dominion.jpg";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const PopularMovies = () => {
  return (
    <section>
      <Container maxWidth="lg">
        <h2>Popular</h2>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ heght: 300, width: 300 }}>
              <Image
                src={Movie1}
                alt="top gun maverick"
                width={300}
                height={300}
                objectFit="cover"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ heght: 300, width: 300 }}>
              <Image
                src={Movie2}
                alt="enola holmes"
                width={300}
                height={300}
                objectFit="cover"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ heght: 300, width: 300 }}>
              <Image
                src={Movie3}
                alt="jurassic world dominion"
                width={300}
                height={300}
                objectFit="cover"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default PopularMovies;
