import React from "react";
import { useLocation } from "react-router-dom";

const useAddClassName = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    const locationName = pathname === "/" ? "home" : pathname.replace("/", "");
    document.body.className = "";
    document.body.classList.add(`route-${locationName}`);
  }, [pathname]);

  return useAddClassName;
};

export default useAddClassName;
