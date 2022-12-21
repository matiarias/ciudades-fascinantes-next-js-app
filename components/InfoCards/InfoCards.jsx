import { useState } from "react";
import useSWR from "swr";
import axios from "axios";

import { SingleCard } from "../SingleCard/SingleCard";

import {
  Container,
  Grid,
  Box,
  Typography,
  CircularProgress,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

const InfoCards = () => {
  const [inputSelect, setInputSelect] = useState("Europe");

  const handleChangeSelect = ({ target }) => {
    setInputSelect(target.value);
  };

  const fetchCards = () => {
    return axios
      .get(`https://restcountries.com/v3.1/region/${inputSelect}`)
      .then((resp) => resp.data);
  };

  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/region/${inputSelect}`,
    fetchCards
  );

  if (error)
    return (
      <Box
        sx={{
          height: "300px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "1rem",
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
          Error al cargar la información
        </Typography>
      </Box>
    );

  if (isLoading)
    return (
      <Box
        sx={{
          height: "300px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress color="success" size={60} thickness={6} />
      </Box>
    );

  return (
    <section>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ marginY: "24px", fontWeight: "700" }}
        >
          Explora sobre los mejores paises del mundo
        </Typography>

        <Box textAlign="center" sx={{ marginY: "2rem" }}>
          <FormControl variant="standard" color="success" margin="dense">
            <InputLabel id="select-country">Filtrar por Región</InputLabel>
            <Select
              variant="filled"
              labelId="select-country"
              id="demo-simple-select"
              value={inputSelect}
              label="Filtrar por Region"
              onChange={handleChangeSelect}
              sx={{ width: { xs: 200, sm: 300, md: 350 } }}
            >
              <MenuItem value="Americas">Americas</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Grid
            container
            spacing={6}
            columns={{ xs: 12, sm: 4, md: 4 }}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            {data?.map((card) => (
              <SingleCard key={card?.name?.official} card={card} />
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default InfoCards;
