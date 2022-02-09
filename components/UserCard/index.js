import Image from "next/image";
import React from "react";

const UserCard = ({ choice, onChoose, disabled }) => {
  return (
    <div onClick={() => onChoose(choice)} disabled={disabled}>
      <Image src={choice.imageURL} alt={choice.type} width={100} height={100} />
    </div>
  );
};

export default UserCard;
