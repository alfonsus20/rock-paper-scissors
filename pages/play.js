import React from "react";
import PrivateLayout from "../components/privateLayout";
import { useUserContext } from "../context/userContext";

const Play = () => {
  const { globalName, logout } = useUserContext();
  return (
    <PrivateLayout>
      <h1>Welcome, {globalName} !</h1>
      <button onClick={logout}>logout</button>
    </PrivateLayout>
  );
};

export default Play;
