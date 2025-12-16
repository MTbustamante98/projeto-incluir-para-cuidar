import React from "react";
import useMedia from "./useMedia";

const useCalcSpacing = () => {
  const responsiveTablet = useMedia("(max-width: 64rem)");

  function calcSpacing(i) {
    const spacing = responsiveTablet ? 110 : 140;
    return `calc(${i} * ${spacing}px)`;
  }

  return calcSpacing;
};

export default useCalcSpacing;
