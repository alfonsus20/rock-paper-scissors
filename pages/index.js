import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import PublicLayout from "../components/publicLayout";
import { useUserContext } from "../context/userContext";

const Home = () => {
  const { login } = useUserContext();
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name);
  };

  return (
    <PublicLayout>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta name="description" content="Simple Rock Paper Scissors Game" />
        <link rel="icon" href="/rock-paper-scissors.png" />
      </Head>
      <div>
        <h1>Input Your Name</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Mulai</button>
        </form>
      </div>
    </PublicLayout>
  );
};

export default Home;
