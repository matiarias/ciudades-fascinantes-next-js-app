import {
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const InfoCards = () => {
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

        <Box>
          <Grid
            container
            spacing={6}
            columns={{ xs: 12, sm: 4, md: 4 }}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid item>
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Tokyo"
                  />
                  <CardContent sx={{ background: "#555", color: "white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Tokyo
                    </Typography>
                    <Typography variant="body2">
                      Tokio, la ajetreada capital de Japón, mezcla lo
                      ultramoderno y lo tradicional, desde los rascacielos
                      iluminados con neones hasta los templos históricos. El
                      opulento santuario Shinto Meiji es conocido por su puerta
                      altísima y los bosques circundantes. El Palacio Imperial
                      se ubica en medio de grandes jardines públicos.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Paris"
                  />
                  <CardContent sx={{ background: "#555", color: "white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Paris
                    </Typography>
                    <Typography variant="body2">
                      París, la capital de Francia, es una importante ciudad
                      europea y un centro mundial del arte, la moda, la
                      gastronomía y la cultura. Su paisaje urbano del siglo XIX
                      está entrecruzado por amplios bulevares y el río Sena.
                      Aparte de estos hitos, como la Torre Eiffel y la catedral
                      gótica de Notre Dame del siglo XII, la ciudad es famosa
                      por su cultura del café y las tiendas de moda de diseñador
                      a lo largo de la calle Rue du Faubourg Saint-Honoré.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item>
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://images.pexels.com/photos/126292/pexels-photo-126292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Praga"
                  />
                  <CardContent sx={{ background: "#555", color: "white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Praga
                    </Typography>
                    <Typography variant="body2">
                      Praga, la capital de la República Checa, está dividida por
                      el río Moldava. Recibe el apodo de la “Ciudad de las Cien
                      Torres” y es conocida por la Plaza de la Ciudad Vieja, el
                      núcleo de su centro histórico, con coloridos edificios
                      barrocos, iglesias góticas y el Reloj Astronómico
                      medieval, que muestra un espectáculo animado cada hora.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default InfoCards;
