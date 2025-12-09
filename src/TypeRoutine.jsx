export const ROTINA_MAO = [
  {
    id: 1,
    img: "./assets/mao-pa.png",
    video: "/videos/mao-pa.mp4",
    balao: "./assets/img-numeracao-1.png",
    boneco: "./assets/boneco-sentado.png",
    tipo: "Posicionamento PA(Póstero-Anterior) de Mão.",
    posicao: "Palma voltada para baixo, em contato com o chassi (pronação).",
    modo: "O paciente deve estar sentado.",
    direcaoRX: "Póstero-Anterior (entra pelas costas, sai pela palma).",
  },
  {
    id: 2,
    img: "./assets/mao-ob.png",
    video: "videos/mao-ob.mp4",
    balao: "./assets/img-numeracao-2.png",
    boneco: "./assets/boneco-sentado.png",
    tipo: "Posicionamento Oblíquo de Mão.",
    posicao:
      "A mão é posicionada em obliquidade de aproximadamente 45° em relação ao receptor. O lado radial (polegar) geralmente fica elevado, enquanto o lado ulnar permanece em contato com o chassi.",
    modo: "O paciente deve estar sentado.",
    direcaoRX:
      "É direcionado perpendicularmente a uma área específica da mão, geralmente no centro da cabeça do terceiro metacarpo ou na articulação metacarpofalângica correspondente",
  },
  {
    id: 3,
    img: "./assets/mao-pe.png",
    video: "/videos/mao-pe.mp4",
    balao: "./assets/img-numeracao-3.png",
    boneco: "./assets/boneco-sentado.png",
    tipo: "Posicionamento Perfil de Mão.",
    posicao:
      "A mão é posicionada em perfil, com o lado ulnar (lado do dedo mínimo) apoiado sobre o receptor, os dedos permanecem estendidos e alinhados.",
    modo: "O paciente deve estar sentado.",
    direcaoRX:
      "Feixe central latero-medial (entra pelo lado externo da mão e sai pelo lado interno)",
  },
];

export const ROTINA_CRANIO = [
  {
    img: "./assets/cranio-pa.png",
    video: "/videos/cranio-pa.mp4",
    balao: "./assets/img-numeracao-1.png",
    boneco: "./assets/boneco-em-pe.png",
    tipo: "Posicionamento PA(Póstero-Anterior) de Crânio.",
    posicao:
      "A testa(glabela) e o nariz encostam diretamente no receptor, a cabeça deve estar centralizada, sem rotação ou inclinação lateral.",
    modo: "O paciente pode ficar em pé(ortostase) ou deitado de bruços(decúbito ventral).",
    direcaoRX:
      "Os raios penetram pela parte de trás do crânio e saem pela frente do crânio.",
  },
  {
    img: "./assets/cranio-waters.png",
    video: "/videos/cranio-waters.mp4",
    balao: "./assets/img-numeracao-2.png",
    boneco: "./assets/boneco-em-pe.png",
    tipo: "Posicionamento de Crânio - Método waters.",
    posicao:
      "O paciente é posicionado em pé(ortostase) preferencialmente ou decúbito prono, o queixo toca o receptor, com a cabeça estendida. A boca deverá permanecer fechada, a menos que a variação Waters modificado seja pedida",
    modo: "O paciente pode ficar em pé(ortostase) ou deitado de bruços com o abdome voltado para baixo(decúbito prono).",
    direcaoRX:
      "O raio-X é emitido de trás para a frente do paciente, ou seja, em projeção PA (postero-anterior).",
  },
  {
    img: "./assets/cranio-ap.png",
    video: "/videos/cranio-ap.mp4",
    balao: "./assets/img-numeracao-3.png",
    boneco: "./assets/boneco-em-pe.png",
    tipo: "Posicionamento de crânio AP(Ântero-Posterior)",
    posicao:
      "O paciente deverá ser posicionado de frente para o tubo, com a cabeça alinhada, sem rotação e o queixo levemente recolhido para manter o crânio alinhado.",
    modo: "O paciente pode ficar em pé(ortostase) ou deitado de bruços(decúbito dorsal).",
    direcaoRX:
      "Os raios entram pela testa e saem pela parte de trás da cabeça.",
  },
  {
    img: "./assets/cranio-pe.png",
    video: "/videos/cranio-pe.mp4",
    balao: "./assets/img-numeracao-4.png",
    boneco: "./assets/boneco-em-pe.png",
    tipo: "Posicionamento de crânio PE(Postero-Anterior Erguido).",
    posicao:
      "O paciente deverá ficar de frente para o receptor, testa e nariz deverão encostar no receptor e, com a cabeça alinhada e sem rotação.",
    modo: "Realizado em pé(ortostase).",
    direcaoRX:
      "O raio-X é emitido de trás para a frente do paciente, ou seja, em projeção PA (postero-anterior).",
  },
];

export const ROTINA_ABDOME = [
  {
    img: "./assets/abdome-1.png",
    video: "/videos/torax-pa.mp4",
    balao: "./assets/img-numeracao-1.png",
    boneco: "./assets/boneco-em-pe.png",
    tipo: "Posicionamento de abdomen PA(Póstero-Anterior).",
    posicao:
      "O paciente deverá ficar de frente para o receptor, com o abdomen encostado no chassi, ombros alinhados e sem rotação. Braços afastados lateralmente para não sobrepor a imagem. Respiração em expiração(soltar o ar) para melhor visualização das alças intestinais.",
    modo: "Realizado em pé(ortostase).",
    direcaoRX: "O raio-X entra pelas costas e sai pelo abdómen.",
  },
  {
    img: "./assets/abdome-orts-ap.png",
    video: "/videos/abdome-orts-ap.mp4",
    balao: "./assets/img-numeracao-2.png",
    boneco: "./assets/boneco-em-pe.png",
    tipo: "Posicionamento ortostático AP(Ântero-Posterior)",
    posicao:
      "O paciente deverá ficar de costas para o receptor com o abdomen voltado para o tubo de raio-X. Corpo alinhado evitando qualquer rotação. Braços afastados lateralmente para não sobrepor a imagem. Realizado em expiração para melhor detalhamento das estruturas abdominais.",
    modo: "Realizado em pé(ortostase).",
    direcaoRX: "O raio-X entra pela frente do abdomen e sai pelo costas.",
  },
  {
    img: "./assets/abdome-rub-dle.png",
    video: "/videos/abdome-rub-dle.mp4",
    balao: "./assets/img-numeracao-3.png",
    boneco: "./assets/boneco-deitado.png",
    tipo: "",
    posicao: "",
    modo: "",
    direcaoRX: "",
  },
  {
    img: "./assets/abdome-dle.png",
    video: "/videos/abdome-dle.mp4",
    balao: "./assets/img-numeracao-4.png",
    boneco: "./assets/boneco-deitado.png",
    tipo: "Incidência Abdomen DLE(Decúbito Lateral Esquerdo)",
    posicao:
      "O paciente deverá estar com as pernas flexionadas para maior conforto e estabilidade. Braço superior elevado e braço inferior à frente do tórax, sem sobrepor o abdómen.",
    modo: "Paciente deitado sobre o lado esquerdo.",
    direcaoRX:
      "O raio-X entra pelo lado direito e sai pelo lado esquerdo, onde está o receptor.",
  },
];

export const ROTINA_TORAX = [
  {
    img: "./assets/torax-pa.png",
    video: "/videos/torax-pa.mp4",
    boneco: " /assets/boneco-em-pe.png",
    balao: "./assets/img-numeracao-1.png",
    tipo: "Incidência Tórax PA(Postero-Anterior)",
    posicao:
      "O paciente é posicionado com o peito encostado no detector, com as mãos apoiadas nas laterais ou segurando as barras, e ombros levemente projetados para frente para afastar as escápulas.",
    modo: "O paciente deverá ficar em pé(ortostase).",
    direcaoRX:
      "O raio-X entra pelas costas, atravessa o tórax e sai pela frente.",
  },
  {
    img: "./assets/torax-pe.png",
    video: "/videos/torax-pe.mp4",
    balao: "./assets/img-numeracao-2.png",
    boneco: "./assets/boneco-perfil.png",
    tipo: "Incidência Tórax PE(Postero-Exposto ou Postero-Estático)",
    posicao: "O paciente deverá ficar em pé(ortostase).",
    modo: "",
    direcaoRX: "",
  },
];
