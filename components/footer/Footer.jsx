import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            position: "sticky",
            bottom: "0",
            background: "linear-gradient(to right, #001100, #00130e)",
          }}
        >
          <Toolbar
            sx={{ justifyContent: "center", alignItems: "center", gap: "12px" }}
          >
            <Typography variant="h6" component="div">
              Creado por Matias Arias
            </Typography>

            <a
              href="https://github.com/matiarias"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>

            <a
              href="https://www.linkedin.com/in/matiasarias27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </Toolbar>
        </AppBar>
      </Box>
    </footer>
  );
};

export default Footer;
