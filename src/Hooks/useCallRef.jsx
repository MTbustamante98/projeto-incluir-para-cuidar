import React from "react";

const useCallRef = (refArrow, refMenu, setActiveMenu) => {
  React.useEffect(() => {
    function outsideClick(e) {
      if (!refMenu.current || !refArrow.current) return;

      if (
        refMenu.current &&
        !refMenu.current.contains(e.target) &&
        refArrow.current &&
        !refArrow.current.contains(e.target)
      ) {
        setActiveMenu(false);
      }
    }

    document.addEventListener("pointerdown", outsideClick);

    return () => document.removeEventListener("pointerdown", outsideClick);
  }, [refArrow, refMenu, setActiveMenu]);
};

export default useCallRef;
