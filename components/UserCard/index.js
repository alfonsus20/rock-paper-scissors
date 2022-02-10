import Image from "next/image";
import React from "react";

const UserCard = ({ choice, onChoose, disabled }) => {
  return (
    <div onClick={() => onChoose(choice)} disabled={disabled}>
      <Image src={choice.imageURL} alt={choice.type} width={120} height={120} />
    </div>
  );
};

export default UserCard;
