import { useLocation } from "react-router-dom";
import useMedia from "./useMedia";

const routines = [
  "/rotina-mao",
  "/rotina-cranio",
  "/rotina-abdome",
  "/rotina-torax",
];
const useResponsiveRoutines = () => {
  const { pathname } = useLocation();
  const responsiveTablet = useMedia("(max-width: 79.938rem)");

  const isRoutine = routines.some((route) => pathname.includes(route));

  return isRoutine && responsiveTablet ? false : true;
};

export default useResponsiveRoutines;
