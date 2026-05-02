import React from "react";
import styles from "./Sugestoes.module.css";
import Head from "../Helper/Head";
import Footer from "../Footer";
import ImgBaloon from "../../assets/balao-sugestao.png";
import TextAreaImg from "../../assets/textarea-sugestao.png";
import useAddClassName from "../../Hooks/useAddClassName";
import useFormSugestoes from "../../Hooks/useFormSugestoes";

const Sugestoes = () => {
  useAddClassName();
  const { form, handleChange, handleSubmit, loading } = useFormSugestoes();

  return (
    <>
      <section className={styles.main}>
        <Head title="Sugestões | Incluir para cuidar" />
        <article className={styles.containerSugestao}>
          <img
            className={styles.baloonImg}
            src={ImgBaloon}
            alt="Figura representando um balao de conversa."
          />
          <form onSubmit={handleSubmit} id="sendEmail" className={styles.form}>
            <div className={styles.inputLabel}>
              <label htmlFor="nome">Nome: </label>
              <input
                type="text"
                name="nome"
                id="nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.textAreaAndFrame}>
              <textarea
                className="font-text-area"
                name="textarea"
                id="textarea"
                value={form.textarea}
                placeholder="Deixe aqui sua sugestão"
                onChange={handleChange}
                required
              ></textarea>
              <img className={styles.textAreaFrame} src={TextAreaImg} alt="" />
            </div>
          </form>
        </article>
        <div className={styles.paragraphDescription}>
          <p>
            *Se você tem alguma ideia para melhorias, nos mande uma mensagem.
          </p>
          <p>
            *Preencha seu nome, e nos envie sua sugestão preenchendo a caixa de
            texto.
          </p>
        </div>
      </section>
      <Footer loading={loading} prev="/banco-de-imagens" />
    </>
  );
};

export default Sugestoes;
