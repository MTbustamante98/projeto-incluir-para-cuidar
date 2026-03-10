import styles from "./ResponsiveMenu.module.css";
import ContainerList from "./ContainerList";

const ResponsiveMenu = ({ currentList, ref }) => {
  return (
    <section className={styles.containerDropMenu}>
      <div ref={ref} className={styles.containerContentDropMenu}>
        <ContainerList currentList={currentList} />
      </div>
    </section>
  );
};

export default ResponsiveMenu;
