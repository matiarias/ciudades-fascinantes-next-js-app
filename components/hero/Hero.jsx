import { Box, Typography } from "@mui/material";

import Image from "next/image";

const Hero = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "80vh", width: "100%" }}>
      <Image
        style={{ objectFit: "cover", objectPosition: "center" }}
        fill
        src="https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg"
        priority
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          bgcolor: "rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          paddingX: "16px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "700" }} align="center">
          Ciudades Fascinantes
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "600" }} align="center">
          Explora las Ciudades más increibles del mundo!
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
