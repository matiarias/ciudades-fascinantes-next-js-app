import { useEffect, useState } from "react";
import Image from "next/image";
// import dataGallery from "../../utils/dataGaleria.json";

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

const Gallery = ({ dataGallery }) => {
  // const [galleryData, setGalleryData] = useState([]);

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setGalleryData(dataGallery);
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  const breakpoint = useMediaQuery("(min-width:600px)");

  return (
    <section style={{ height: "100%", width: "100%", paddingBottom: "20px" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{ marginY: "24px", fontWeight: "700" }}
        >
          Galeria
        </Typography>

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
          {dataGallery.map((item) => (
            <ImageListItem
              key={item.id}
              sx={{ height: "500px", width: "100%" }}
            >
              <Image
                src={item.urls.small}
                alt={item.tags[1].title}
                fill
                style={{ objectFit: "cover" }}
              />

              <ImageListItemBar title={item.tags[1].title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </section>
  );
};

export default Gallery;
