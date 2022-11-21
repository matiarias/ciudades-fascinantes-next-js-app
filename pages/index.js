import Head from "next/head";
import NavBar from "../components/navbar/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Folcademy Next app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
    </div>
  );
}
