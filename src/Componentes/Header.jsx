import React from "react";
import styles from "./Header.module.css";
import Logo from "../assets/logo-senac.png";
import { Link, useLocation } from "react-router";
import Titulo from "./Titulo";
import { UserContext } from "../CreateUserContext";
import useClass from "../Hooks/useClass";
import useModifyTitle from "../Hooks/useModifyTitle";

const Header = () => {
  const refHeader = React.useRef();
  const { pathname } = useLocation();
  const { modifyTitle, activeModal } = React.useContext(UserContext);
  const anime = useClass();
  useModifyTitle();
  
  return (
    <header
      ref={refHeader}
      className={`${styles.header} ${
        pathname === "/"
          ? styles.headerHome
          : pathname === "/sugestoes"
            ? styles.headerSugestoes
            : ""
      } ${anime} ${activeModal ? styles.active : ""}`}
    >
      <Link to="/" aria-label="Incluir para cuidar - Home">
        <img className={styles.logo} src={Logo} alt="Logo da empresa." />
      </Link>
      {pathname !== "/" && <Titulo>{modifyTitle}</Titulo>}
    </header>
  );
};

export default Header;
