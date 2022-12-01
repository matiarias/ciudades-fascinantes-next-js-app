import { dataGaleriaImg } from "../../utils/dataGaleria";

import Image from "next/image";

import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
} from "@mui/material";

const Gallery = () => {
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
          {dataGaleriaImg.map((item, index) => (
            <ImageListItem key={index} sx={{ height: "500px", width: "100%" }}>
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
      </Container>
    </section>
  );
};

export default Gallery;
