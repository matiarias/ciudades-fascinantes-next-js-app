import { useEffect, useState } from "react";
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
  const [cardsData, setCardsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [inputSelect, setInputSelect] = useState("Europe");

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/region/${inputSelect}`
      );
      // console.log(res.data);
      setCardsData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [inputSelect]);

  const handleChangeSelect = ({ target }) => {
    setInputSelect(target.value);
  };

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

        {isLoading && !cardsData ? (
          <Box
            sx={{
              textAlign: "center",
              marginY: "20px",
            }}
          >
            <CircularProgress color="warning" size={60} thickness={6} />
          </Box>
        ) : (
          <Box>
            <Grid
              container
              spacing={6}
              columns={{ xs: 12, sm: 4, md: 4 }}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              {cardsData.map((card) => (
                <SingleCard key={card?.name.official} card={card} />
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </section>
  );
};

export default InfoCards;
