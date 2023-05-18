const botaoAlterarTema = document.getElementById("botao-tema-kof");
const body = document.querySelector("body");
const imagemBotaoTrocadeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  body.classList.toggle("modo-escuro");
  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/logo-kyo.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/logo-iori.gif");
  }
});
