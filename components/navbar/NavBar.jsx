import styles from "./NavBar.module.css";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";

const NavBar = () => {
  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <MovieFilterIcon fontSize="large" />
          <h1 className={styles.navbarTitle}>PelisSJ</h1>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
