import React from "react";
import styles from "./ResponsiveMenu.module.css";
import ContainerList from "./ContainerList";

const ResponsiveMenu = ({ currentList, ref }) => {
  return (
      <div ref={ref} className={styles.containerMobileMenu}>
        <ContainerList currentList={currentList} />
      </div>
  );
};

export default ResponsiveMenu;
