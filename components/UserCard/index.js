import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styles from "./UserCard.module.scss";

const UserCard = ({ choice, onChoose, disabled, currentUserChoice }) => {
  return (
    <div
      className={styles["card"]}
      onClick={() => onChoose(choice)}
      disabled={disabled}
    >
      <Image src={choice.imageURL} alt={choice.type} width={120} height={120} />{" "}
      {currentUserChoice.type === choice.type && (
        <motion.div
          className={styles["selected"]}
          layoutId="selected"
          whileTap={{ borderColor: "#cf389b" }}
        />
      )}
    </div>
  );
};

export default UserCard;
