import React from "react";
import { UserMenuContext } from "./CreateMenuContext";
import { useLocation } from "react-router-dom";

const MenuContext = ({ children }) => {
  const [activeMenu, setActiveMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
      setTimeout(() => {
        setActiveMenu(true);
        setTimeout(() => {
          setActiveMenu(false);
        }, 2000);
      }, 1000);
  }, [pathname, setActiveMenu]);

  function toggleMenu() {
    setActiveMenu((activeMenu) => {
      const newActiveMenu = !activeMenu;
      return newActiveMenu;
    });
  }

  return (
    <UserMenuContext.Provider value={{ activeMenu, toggleMenu, setActiveMenu }}>
      {children}
    </UserMenuContext.Provider>
  );
};

export default MenuContext;
