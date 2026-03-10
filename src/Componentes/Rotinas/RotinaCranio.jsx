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
  const responsiveMenuDrop = useMedia("(max-width: 90rem)");
  const responsiveImgPuppet = useMedia("(max-width: 43.688rem)");
  const responsiveImgBaloon = useMedia("(max-width: 64rem)");
  const { activeMenu, toggleMenu, setActiveMenu } =
    React.useContext(UserMenuContext);
  const refMenu = React.useRef(null);
  const refArrow = React.useRef(null);

  useCallRef(refMenu, refArrow, setActiveMenu);
  const spacing = useCalcSpacing();

  return (
    <>
      <section className={styleBoxRoutine.parentContainer}>
        <Head title="Rotina Mão | Incluir para cuidar" />
        <ContainerBorderLeft />
        {responsiveMenuDrop ? (
          <div className={`${styleBoxRoutine.containerProperties} animeUp`}>
            <div className={styleBoxRoutine.titleCharacteristicsAndImgDrop}>
              <h2 className={styleBoxRoutine.titleBoxCharacteristics}>
                Características do posicionamento
              </h2>
              <ImgArrow
                ref={refArrow}
                className={styleBoxRoutine.imgMenuMob}
                onClick={toggleMenu}
              />
            </div>
            {activeMenu && (
              <ResponsiveMenu ref={refMenu} currentList={currentList} />
            )}
          </div>
        ) : (
          <ContainerList className="responsive" currentList={currentList} />
        )}
        {currentList && (
          <>
            <RoutineImage
              className={styleBoxRoutine.containerImgRoutine}
              src={currentList.img}
              alt="Figura que ilustra o tipo da rotina."
            />
            {!responsiveImgPuppet && (
              <RoutineImage
                className={styleBoxRoutine.positionPuppet}
                src={currentList.boneco}
                alt="Figura que ilustra a posição em que a pessoa deverá ficar."
              />
            )}
          </>
        )}
        {ROTINA_CRANIO.slice(0, index + 1).map((item, i) => (
          <div
            key={item.id}
            style={{ top: spacing(i) }}
            className={styleBoxRoutine.numberingRoutines}
          >
            {!responsiveImgBaloon && <img src={item.balao} />}
          </div>
        ))}
        {currentList && (
          <div className={styleBoxRoutine.boxVideoParagraph}>
            <p
              className={`${styleBoxRoutine.informativeParagraph} font-instruction`}
            >
              Avance o vídeo para mudar o posicionamento.
            </p>
            <Video
              className={styleBoxRoutine.videoRoutine}
              source={currentList.video}
              onEnded={nextStep}
            />
          </div>
        )}
      </section>
      <Footer next="/sugestoes" prev="/banco-de-imagens" />
    </>
  );
};

export default RotinaCranio;
