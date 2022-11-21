import styles from "./Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <h3 className={styles.footer__title}>Creado Por Matias Arias</h3>
        <a
          href="https://github.com/matiarias"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
