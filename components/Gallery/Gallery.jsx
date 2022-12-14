import Image from "next/image";

import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
} from "@mui/material";

const Gallery = ({ dataGallery }) => {
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
            height: "1200px",
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

              {/* <ImageListItemBar title={item.tags[1].title} /> */}
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </section>
  );
};

export default Gallery;
