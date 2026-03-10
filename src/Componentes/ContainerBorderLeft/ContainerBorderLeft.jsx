import React from "react";
import styles from "./ContainerBorderLeft.module.css";
import icoDuasMaos from "../../assets/ico-duas-maos-inicio.png";
import icoApresentacao from "../../assets/ico-mao-apresentacao.png";
import icoLegenda from "../../assets/ico-legenda.png";
import icoInfo from "../../assets/ico-info.png";
import icoRotinas from "../../assets/ico-rotinas.png";
import { Link } from "react-router-dom";
import MenuIcon from "../DivToggleDrops/MenuIcon";
import useModifyTitle from "../../Hooks/useModifyTitle";
import useResponsiveRoutines from "../../Hooks/useResponsiveRoutines";
import useMedia from "../../Hooks/useMedia";
import { UserContext } from "../../CreateUserContext";
import useAddClassName from "../../Hooks/useAddClassName";

const ContainerBorderLeft = () => {
  const { willActivatedBox, boxRef } = React.useContext(UserContext);
  const typeRoute = useModifyTitle();
  useAddClassName();

  const responsiveBorder = useResponsiveRoutines();
  const responsiveMobile = useMedia("(max-width: 48rem)");

  if (!responsiveBorder) return null;
  if (!willActivatedBox) return null;
  return (
    <section
      ref={boxRef}
      className={
        responsiveMobile
          ? `${styles.containerBorderLeftMobile} animeUp`
          : `${styles.containerBorderLeft} animeUp`
      }
    >
      <Link to="/">
        <MenuIcon src={icoDuasMaos} alt="Ícone de início" title="Início" />
      </Link>
      <MenuIcon
        src={icoApresentacao}
        alt="Ícone de início"
        title="Apresentação"
      />
      <MenuIcon src={icoLegenda} alt="Ícone de início" title="Legenda" />
      <MenuIcon src={icoInfo} alt="Ícone de início" title="Informação" />
      {!typeRoute && (
        <MenuIcon src={icoRotinas} alt="Ícone de início" title="Rotinas" />
      )}
    </section>
  );
};

export default ContainerBorderLeft;
