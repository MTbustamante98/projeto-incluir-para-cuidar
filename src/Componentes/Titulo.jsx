import React from "react";
import "../Tipografia.css";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Titulo = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <h1
      className={
        pathname === "/sugestoes"
          ? `${styles.title} ${styles.titleSugestoes} titulo-header-typewriter`
          : `${styles.title} titulo-header-typewriter`
      }
    >
      {children}
    </h1>
  );
};

export default Titulo;
