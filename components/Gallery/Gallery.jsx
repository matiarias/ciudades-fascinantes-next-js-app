import { dataGaleriaImg } from "../../utils/dataGaleria";

import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Typography } from "@mui/material";

const Gallery = () => {
  return (
    <section style={{ height: "100%", width: "100%" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          align="center"
          sx={{ marginY: "24px", fontWeight: "700" }}
        >
          Galeria
        </Typography>

        <ImageList
          sx={{ width: "100%", height: "100%" }}
          cols={3}
          rowHeight="auto"
          gap={12}
        >
          {dataGaleriaImg.map((item, index) => (
            <ImageListItem key={index} sx={{ height: "500px", width: "100%" }}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ objetctFit: "cover" }}
              />

              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </section>
  );
};

export default Gallery;
