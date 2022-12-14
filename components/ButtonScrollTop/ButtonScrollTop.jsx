import { useEffect, useState } from "react";

import { Box, IconButton } from "@mui/material";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ButtonScrollTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const handleClickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTop && (
        <Box
          sx={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            backgroundColor: "#8a8a8a",
            borderRadius: "50%",
          }}
        >
          <IconButton
            onClick={handleClickToTop}
            color="success"
            sx={{ padding: "1rem", borderRadius: "50%" }}
          >
            <ArrowUpwardIcon color="success" fontSize="large" />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default ButtonScrollTop;
