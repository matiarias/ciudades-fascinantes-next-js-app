import { useEffect, useState } from "react";
import Image from "next/image";
import dataGallery from "../../utils/dataGaleria.json";

import {
  Container,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";

const Gallery = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(dataGallery);
      setIsLoading(false);
    }, 3000);
  }, []);

  const breakpoint = useMediaQuery("(min-width:600px)");

  return (
    <section style={{ height: "100%", width: "100%" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ marginY: "24px", fontWeight: "700" }}
        >
          Galeria
        </Typography>

        {isLoading ? (
          <Box sx={{ textAlign: "center", marginY: "20px" }}>
            <CircularProgress color="success" size={60} thickness={6} />
          </Box>
        ) : (
          <ImageList
            sx={{
              position: "relative",
              width: "100%",
              height: "1000px",
            }}
            cols={breakpoint ? 3 : 2}
            rowHeight="auto"
            gap={12}
          >
            {data.map((item, index) => (
              <ImageListItem
                key={index}
                sx={{ height: "500px", width: "100%" }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />

                <ImageListItemBar title={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Container>
    </section>
  );
};

export default Gallery;
