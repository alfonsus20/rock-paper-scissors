import React from "react";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: 200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 },
  };

  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      variants={variants}
    >
      {children}
    </motion.main>
  );
};

export default Layout;
