import React from "react";
import styles from "./Sugestoes.module.css";
import Head from "../Helper/Head";
import Footer from "../Footer";
import ImgBaloon from "../../assets/balao-sugestao.png";
import TextAreaImg from "../../assets/textarea-sugestao.png";
import emailjs from "@emailjs/browser";
import useAddClassName from "../../Hooks/useAddClassName";

const Sugestoes = () => {
  useAddClassName();
  const [form, setForm] = React.useState({
    nome: "",
    textarea: "",
  });

  React.useEffect(() => {
    emailjs.init("S7MmKe84IxrIf2XJK");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.nome || !form.textarea) return false;

    emailjs
      .send("service_4s0cv2p", "template_7aen7un", {
        name: form.nome,
        message: form.textarea,
      })
      .then(() => {
        alert("Sugestão enviada com sucesso!");
        setForm({ nome: "", textarea: "" });
      })
      .catch((e) => alert("Erro, tente novamente!", e));
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <section>
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
            *Preencha seu nome e nos envie sua sugestão preenchendo a caixa de
            texto.
          </p>
        </div>
      </section>
      <Footer prev="/banco-de-imagens" />
    </>
  );
};

export default Sugestoes;
