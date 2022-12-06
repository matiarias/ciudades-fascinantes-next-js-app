import SvgHeart from "../../public/heart.svg";

import {
  AppBar,
  Box,
  Stack,
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

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
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
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </footer>
  );
};

export default Footer;
