import React from "react";
import styleBoxRoutine from "./RoutineBox.module.css";
import useMedia from "../../Hooks/useMedia";

const ContainerList = ({ currentList }) => {
  const mobile = useMedia("(max-width: 90rem)");

  return (
    <div
      className={
        mobile
          ? `${styleBoxRoutine.containerPropertiesMobile}`
          : `${styleBoxRoutine.containerProperties} animeUp`
      }
    >
      <h2 className={styleBoxRoutine.characteristics}>
        Características do posicionamento
      </h2>
      <ul
        key={currentList.id}
        className={`${styleBoxRoutine.listCharacteristics}`}
      >
        <li>
          <span className={styleBoxRoutine.description}>Tipo:</span>{" "}
          {currentList.tipo}
        </li>
        <li>
          <span className={styleBoxRoutine.description}>Posição:</span>{" "}
          {currentList.posicao}
        </li>
        <li>
          <span className={styleBoxRoutine.description}>Modo:</span>{" "}
          {currentList.modo}
        </li>
        <li>
          <span className={styleBoxRoutine.description}>
            Direção do Raio-X:
          </span>{" "}
          {currentList.direcaoRX}
        </li>
      </ul>
    </div>
  );
};

export default ContainerList;
