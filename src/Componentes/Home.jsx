import React from "react";
import Footer from "./Footer";
import styles from "./Introducao.module.css";
import imgInicial from "../assets/img-pg-inicial.png";
import imgInicialMedio from "../assets/img-pg-inicial-medio.png";
import Video from "./Video";
import Head from "./Helper/Head";
import useAddClassName from "../Hooks/useAddClassName";

const Home = () => {
  useAddClassName();
  return (
    <>
      <section className={styles.initialContainer}>
        <Head
          title="Incluir para Cuidar | Home"
          description="Home do site, com o video inicial."
        />
        <div className={`${styles.initialContainerImg} opacityAnime `}>
          <picture>
            <source
              media="(min-width: 1441px)"
              srcSet={imgInicial}
              type="image/png"
            />
            <source
              media="(max-width: 1440px)"
              srcSet={imgInicialMedio}
              type="image/png"
            />
            <img
              src={imgInicial}
              alt="Imagem ilustrativa do projeto Incluir para Cuidar"
            />
          </picture>
          <Video
            source="/videos/video-apresentacao-inicial.mp4"
            aria-label="Vídeo introdutório sobre o projeto Incluir para Cuidar"
          />
        </div>
      </section>
      <Footer next="/banco-de-imagens" />
    </>
  );
};

export default Home;
