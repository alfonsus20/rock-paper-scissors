import React from "react";

const UserCard = ({ type, onChoose, disabled }) => {
  return (
    <button onClick={() => onChoose(type)} disabled={disabled}>
      {type}
    </button>
  );
};

export default UserCard;
