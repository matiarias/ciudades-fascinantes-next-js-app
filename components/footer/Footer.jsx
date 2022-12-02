import SvgHeart from "../../public/heart.svg";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  SvgIcon,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <Box>
        <AppBar
          sx={{
            position: "static",
            bottom: 0,
            background: "linear-gradient(to right, #001100, #00420e)",
          }}
        >
          <Toolbar
            sx={{
              height: "90px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Creado por Matias Arias
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <a
                href="https://github.com/matiarias"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="large" sx={{ color: "white" }} />
              </a>

              <a
                href="https://www.linkedin.com/in/matiasarias27/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
              </a>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </footer>
  );
};

export default Footer;
