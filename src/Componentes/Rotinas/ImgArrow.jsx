import React from "react";
import arrowDown from "../../assets/seta-para-baixo-16px.png";
import arrowUp from "../../assets/seta-para-cima.png";
import { UserMenuContext } from "../../CreateMenuContext";

const ImgArrow = ({ alt, className, onClick, ref }) => {
  const { activeMenu } = React.useContext(UserMenuContext);

  return (
    <>
      {activeMenu ? (
        <img
          ref={ref}
          src={arrowUp}
          alt={alt}
          className={className}
          onClick={onClick}
        />
      ) : (
        <img
          ref={ref}
          src={arrowDown}
          alt={alt}
          className={className}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default ImgArrow;
