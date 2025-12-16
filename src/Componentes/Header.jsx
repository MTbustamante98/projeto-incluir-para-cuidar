import React from "react";
import styles from "./Header.module.css";
import Logo from "../assets/logo-senac.png";
import { Link, useLocation } from "react-router";
import Titulo from "./Titulo";
import { UserContext } from "../CreateUserContext";
import useClass from "../Hooks/useClass";
import useModifyTitle from "../Hooks/useModifyTitle";

const Header = () => {
  const { pathname } = useLocation();
  const { modifyTitle } = React.useContext(UserContext);
  const anime = useClass();
  useModifyTitle();

  return (
    <header
      className={
        pathname === "/sugestoes"
          ? `${styles.headerSugestoes || ""}`
          : `${styles.header} ${anime}`
      }
    >
      <Link to="/" aria-label="Incluir para cuidar - Home">
        <img className={styles.logo} src={Logo} alt="Logo da empresa." />
      </Link>
      {pathname !== "/" && <Titulo>{modifyTitle}</Titulo>}
    </header>
  );
};

export default Header;
