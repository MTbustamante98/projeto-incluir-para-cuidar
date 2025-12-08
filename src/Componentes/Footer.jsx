import React from "react";
import styles from "./Footer.module.css";
import ImgNext from "../assets/avancar-prox-pagina.png";
import ImgPrev from "../assets/img-prev.png";
import { Link, useLocation } from "react-router";

const Footer = ({ next, prev }) => {
  const { pathname } = useLocation();

  return (
    <footer className={styles.footer}>
      {pathname !== "/" && (
        <Link to={prev} aria-label="Retornar para página anterior.">
          <img
            className={styles.imgPrev}
            src={ImgPrev}
            alt="Ícone para clicar e retornar"
          />
        </Link>
      )}
      {pathname === "/sugestoes" ? (
        <button
          className={`${styles.buttonSugestoes} font-btn-sugestao`}
          type="submit"
          form="sendEmail"
        >
          Enviar
        </button>
      ) : (
        <Link to={next} aria-label="Avançar para a próxima página.">
          <img
            className={styles.imgNext}
            src={ImgNext}
            alt="Ícone para clicar e avançar"
          />
        </Link>
      )}
    </footer>
  );
};

export default Footer;
