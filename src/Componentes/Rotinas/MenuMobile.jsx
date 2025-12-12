import React from "react";
import styles from "./MenuMobile.module.css";
import ContainerList from "./ContainerList";

const MenuMobile = ({ currentList, ref }) => {
  return (
      <div ref={ref} className={styles.containerMobileMenu}>
        <ContainerList currentList={currentList} />
      </div>
  );
};

export default MenuMobile;
