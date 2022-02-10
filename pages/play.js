import Image from "next/image";
import React, { useEffect, useState } from "react";
import PrivateLayout from "../components/privateLayout";
import UserCard from "../components/UserCard";
import { useUserContext } from "../context/userContext";
import styles from "../styles/Play.module.scss";

const Play = () => {
  const { globalName, logout } = useUserContext();
  const [userLives, setUserLives] = useState(3);
  const [botLives, setBotLives] = useState(10);
  const [result, setResult] = useState("");

  const choices = [
    { type: "ROCK", imageURL: "/rock.png" },
    { type: "PAPER", imageURL: "/paper.png" },
    { type: "SCISSORS", imageURL: "/scissors.png" },
  ];

  const [botChoice, setBotChoice] = useState(choices[0]);
  const [userChoice, setUserChoice] = useState({});

  const changeBotChoice = () => {
    setInterval(() => {
      const random = Math.floor(Math.random() * 3);
      setBotChoice(choices[random]);
    }, 2000);
  };

  useEffect(() => {
    changeBotChoice();
  }, []);

  useEffect(() => {
    showResult();
  }, [userLives, botLives]);

  const showResult = () => {
    if (userLives === 0) {
      setResult("LOST");
    }
    if (botLives === 0) {
      setResult("WON");
    }
  };

  const increaseUserLives = () => {
    if (userLives < 3) {
      setUserLives(userLives + 1);
    }
    setBotLives(botLives - 1);
  };

  const decreaseUserLives = () => {
    setUserLives(userLives - 1);
    if (botLives < 10) {
      setBotLives(botLives + 1);
    }
  };

  const handleChoice = (choice) => {
    setUserChoice(choice);
    if (choice.type !== botChoice.type) {
      if (choice.type === "SCISSORS") {
        if (botChoice.type === "ROCK") {
          decreaseUserLives();
        } else {
          increaseUserLives();
        }
      } else if (choice.type === "ROCK") {
        if (botChoice.type === "PAPER") {
          decreaseUserLives();
        } else {
          increaseUserLives();
        }
      } else {
        if (botChoice.type === "SCISSORS") {
          decreaseUserLives();
        } else {
          increaseUserLives();
        }
      }
    }
    setTimeout(() => {
      setUserChoice({});
    }, 1000);
  };

  const restartGame = () => {
    setBotLives(10);
    setUserLives(3);
    setResult("");
  };

  return (
    <PrivateLayout>
      <div className="container">
        {result ? (
          <div className={styles["result-container"]}>
            <h1>
              You{" "}
              <span
                className={result === "WON" ? styles["won"] : styles["lost"]}
              >
                {result}
              </span>
            </h1>
            <div className={styles["btn-container"]}>
              <button className={styles["btn-restart"]} onClick={restartGame}>
                Restart
              </button>
              <button className={styles["btn-quit"]} onClick={logout}>
                Quit Game
              </button>
            </div>
          </div>
        ) : (
          <div className={styles["game-container"]}>
            <h1>
              Welcome, <span>{globalName}</span> !
            </h1>
            <div className={styles["score-container"]}>
              <div className={`${styles["score-item"]} ${styles["choice"]}`}>
                <Image
                  src={botChoice.imageURL}
                  alt={botChoice.type}
                  width={150}
                  height={150}
                />
                <h2>BOT</h2>
              </div>
              <div className={`${styles["score-item"]} ${styles["lives"]}`}>
                <div className={styles["lives__bot"]}>{botLives}</div>
                <div className={styles["lives__vs"]}>VS</div>
                <div className={styles["lives__user"]}>{userLives}</div>
              </div>
              <div className={`${styles["score-item"]} ${styles["choice"]}`}>
                {userChoice.imageURL && (
                  <Image
                    src={userChoice.imageURL}
                    alt={userChoice.type}
                    width={150}
                    height={150}
                  />
                )}
                <h2>YOU</h2>
              </div>
            </div>
            <div className={styles["card-container"]}>
              {choices.map((choice, idx) => (
                <UserCard
                  key={idx}
                  choice={choice}
                  onChoose={handleChoice}
                  disabled={!!userChoice.type}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </PrivateLayout>
  );
};

export default Play;
