import { Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <Box sx={{ position: "relative", minHeight: "80vh", width: "100%" }}>
        <Image
          style={{ objectFit: "cover", objectPosition: "center" }}
          fill
          src="https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg"
          priority
          alt="Amsterdam"
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
          <Typography
            variant="h3"
            sx={{ color: "#ebebeb", fontWeight: "700" }}
            align="center"
          >
            <Typewriter
              options={{
                strings: ["Ciudades Fascinantes"],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: "#ebebeb", fontWeight: "600" }}
            align="center"
          >
            Explora los paises y ciudades más increibles del mundo
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default Hero;
