import React, { useEffect, useState } from "react";
import PrivateLayout from "../components/privateLayout";
import UserCard from "../components/UserCard";
import { useUserContext } from "../context/userContext";

const Play = () => {
  const { globalName, logout } = useUserContext();
  const [userLives, setUserLives] = useState(3);
  const [botLives, setBotLives] = useState(10);
  const [botChoice, setBotChoice] = useState({});
  const [userChoice, setUserChoice] = useState({});
  const [result, setResult] = useState("");

  const choices = [
    { type: "ROCK", imageURL: "/rock.png" },
    { type: "PAPER", imageURL: "/paper.png" },
    { type: "SCISSORS", imageURL: "/scissors.png" },
  ];

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

          <div>User Choice : {userChoice.type}</div>
          <div>Bot Choice : {botChoice.type}</div>

          <div>
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
    </PrivateLayout>
  );
};

export default Play;
