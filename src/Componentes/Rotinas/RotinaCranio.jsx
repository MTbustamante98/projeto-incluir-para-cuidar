import React from "react";
import styleBoxRoutine from "./RoutineBox.module.css";
import ContainerBorderLeft from "../ContainerBorderLeft/ContainerBorderLeft";
import Footer from "../Footer";
import Head from "../Helper/Head";
import { ROTINA_CRANIO } from "../../TypeRoutine";
import useRoutines from "../../Hooks/useRoutines";
import RoutineImage from "./RoutineImage";
import ImgArrow from "./ImgArrow";
import Video from "../Video";
import ContainerList from "./ContainerList";
import useMedia from "../../Hooks/useMedia";
import ResponsiveMenu from "./ResponsiveMenu";
import { UserMenuContext } from "../../CreateMenuContext";
import useCallRef from "../../Hooks/useCallRef";
import useCalcSpacing from "../../Hooks/useCalcSpacing";

const RotinaCranio = () => {
  const { currentList, nextStep, index } = useRoutines(ROTINA_CRANIO);
  const responsive = useMedia("(max-width: 90rem)");
  const { activeMenu, toggleMenu, setActiveMenu } =
    React.useContext(UserMenuContext);
  const refMenu = React.useRef(null);
  const refArrow = React.useRef(null);

  useCallRef(refMenu, refArrow, setActiveMenu);
  const calcSpacing = useCalcSpacing();

  return (
    <section className={styleBoxRoutine.parentContainer}>
      <Head title="Rotina Crânio | Incluir para cuidar" />
      <ContainerBorderLeft />
      <Footer next="/sugestoes" prev="/banco-de-imagens" />
      {currentList && (
        <>
          <RoutineImage
            className={styleBoxRoutine.containerImgRoutine}
            src={currentList.img}
            alt="Figura que ilustra o tipo da rotina."
          />
          <RoutineImage
            className={styleBoxRoutine.positionPuppet}
            src={currentList.boneco}
            alt="Figura que ilustra a posição em que a pessoa deverá ficar."
          />
        </>
      )}
      {responsive ? (
        <div className={`${styleBoxRoutine.containerProperties} animeUp`}>
          <h2 className={styleBoxRoutine.characteristics}>
            Características do posicionamento
          </h2>
          <ImgArrow
            ref={refArrow}
            alt="Seta indicando para baixo"
            className={styleBoxRoutine.imgMenuMob}
            onClick={toggleMenu}
          />
          {activeMenu && (
            <ResponsiveMenu ref={refMenu} currentList={currentList} />
          )}
        </div>
      ) : (
        <ContainerList currentList={currentList} />
      )}
      <p className={`${styleBoxRoutine.informativeParagraph} font-instruction`}>
        Avance o vídeo para mudar o posicionamento.
      </p>
      {ROTINA_CRANIO.slice(0, index + 1).map((item, i) => (
        <div
          key={i}
          style={{ top: calcSpacing(i) }}
          className={styleBoxRoutine.numberingRoutines}
        >
          <img src={item.balao} />
        </div>
      ))}
      {currentList && (
        <Video
          className={styleBoxRoutine.videoRoutine}
          source={currentList.video}
          onEnded={nextStep}
        />
      )}
    </section>
  );
};

export default RotinaCranio;
