import React from "react";
import emailjs from "@emailjs/browser";

const useFormSugestoes = () => {
  const [form, setForm] = React.useState({
    nome: "",
    textarea: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    emailjs.init("xBuCUik-xTfB3Nk_9");
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.nome || !form.textarea) return false;
    setLoading(true);

    try {
      await emailjs.send("service_j7s471w", "template_bf3igd9", {
        name: form.nome,
        message: form.textarea,
      });
      alert("Sugestão enviada com sucesso!");
      setForm({ nome: "", textarea: "" });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return {
    handleSubmit,
    handleChange,
    loading,
    form,
    error,
  };
};

export default useFormSugestoes;
