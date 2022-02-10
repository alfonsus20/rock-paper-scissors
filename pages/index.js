import Head from "next/head";
import { useState } from "react";
import PublicLayout from "../components/PublicLayout";
import { useUserContext } from "../context/userContext";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const { login } = useUserContext();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name);
  };

  return (
    <PublicLayout>
      <div className="container">
        <Head>
          <title>Rock Paper Scissors</title>
        </Head>
        <div className={styles["form-wrapper"]}>
          <h1>
            Welcome to <br />
            <span className={styles.rock}>Rock</span>{" "}
            <span className={styles.paper}>Paper</span> {" "}
            <span className={styles.scissors}>Scissors</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Please insert your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">START</button>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Home;
