import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";

const UserCard = ({ choice, onChoose, disabled, currentUserChoice }) => {
  return (
    <div
      className={`${styles["card"]}`}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <div className={disabled ? styles["disabled"] : ""} />
      <Image
        src={choice.imageURL}
        alt={choice.type}
        width={120}
        height={120}
        onClick={() => onChoose(choice)}
        className={disabled ? styles["img-disabled"] : ""}
      />
      {currentUserChoice.type === choice.type && (
        <motion.div className={styles["selected"]} layoutId="selected" />
      )}
    </div>
  );
};

export default UserCard;
