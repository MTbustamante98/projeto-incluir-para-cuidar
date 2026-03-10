import React from "react";
import styles from "./MenuIcons.module.css";
import ButtonSlideContainer from "./ButtonSlideContainer";
import { useLocation } from "react-router-dom";
import useMedia from "../../Hooks/useMedia";
import useModifyVideoAndTitle from "../../Hooks/useModifyVideoAndTitle";

const MenuIcon = ({ src, alt, title }) => {
  const [slideMenu, setSlideMenu] = React.useState(false);
  const { pathname } = useLocation();
  const responsiveMobile = useMedia("(max-width: 48rem)");
  const modifyVideoAndTitle = useModifyVideoAndTitle();

  React.useEffect(() => {
    setTimeout(() => {
      setSlideMenu(true);
      setTimeout(() => {
        setSlideMenu(false);
      }, 2000);
    }, 1000);
  }, []);

  function OnSlideActive() {
    setSlideMenu(true);
  }

  function OnSlideInactive() {
    setSlideMenu(false);
  }

  if (responsiveMobile)
    return (
      <div className={styles.menuIcons}>
        <div
          onClick={() => modifyVideoAndTitle(title)}
          className={styles.dropWrapper}
        >
          <div className={styles.activeDropChoose}>
            <img src={src} alt={alt} />
          </div>
        </div>
      </div>
    );

  return (
    <div className={styles.menuIcons}>
      <div
        onMouseEnter={OnSlideActive}
        onMouseLeave={OnSlideInactive}
        className={styles.dropWrapper}
      >
        <div className={styles.activeDropChoose}>
          <img src={src} alt={alt} />
        </div>
        {pathname === "/banco-de-imagens" && slideMenu && !responsiveMobile && (
          <ButtonSlideContainer onClick={() => modifyVideoAndTitle(title)}>
            {title}
          </ButtonSlideContainer>
        )}
      </div>
    </div>
  );
};

export default MenuIcon;
