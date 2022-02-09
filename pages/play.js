import React, { useEffect, useState } from "react";
import PrivateLayout from "../components/privateLayout";
import UserCard from "../components/userCard";
import { useUserContext } from "../context/userContext";

const Play = () => {
  const { globalName, logout } = useUserContext();
  const [userLives, setUserLives] = useState(3);
  const [botLives, setBotLives] = useState(10);
  const [botChoice, setBotChoice] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");

  const choices = ["ROCK", "PAPER", "SCISSORS"];

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
      setResult("You Lose");
    }
    if (botLives === 0) {
      setResult("You Won");
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

  const handleChoice = (type) => {
    setUserChoice(type);
    if (type !== botChoice) {
      if (type === "SCISSORS") {
        if (botChoice === "ROCK") {
          decreaseUserLives();
        } else {
          increaseUserLives();
        }
      } else if (type === "ROCK") {
        if (botChoice === "PAPER") {
          decreaseUserLives();
        } else {
          increaseUserLives();
        }
      } else {
        if (botChoice === "SCISSORS") {
          decreaseUserLives();
        } else {
          increaseUserLives();
        }
      }
    }
    setTimeout(() => {
      setUserChoice("");
    }, 1000);
  };

  const restartGame = () => {
    setBotLives(10);
    setUserLives(3);
    setResult("");
  };

  return (
    <PrivateLayout>
      {result ? (
        <div>
          <p>{result}</p>
          <button onClick={restartGame}>Restart</button>
          <button onClick={logout}>Quit Game</button>
        </div>
      ) : (
        <div>
          <h1>Welcome, {globalName} !</h1>
          <div>Nyawa User : {userLives}</div>
          <div>Nyawa Bot : {botLives}</div>

          <div>User Choice : {userChoice}</div>
          <div>Bot Choice : {botChoice}</div>

          <div>
            {choices.map((choice, idx) => (
              <UserCard
                key={idx}
                type={choice}
                onChoose={handleChoice}
                disabled={!!userChoice}
              />
            ))}
          </div>
        </div>
      )}
    </PrivateLayout>
  );
};

export default Play;
