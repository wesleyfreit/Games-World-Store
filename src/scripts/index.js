import * as menu from "./menu.js";
import * as login from "./login.js";
import * as dados from "./dados.js";

window.addEventListener("load", () => {
  if (!dados.verificarUser()) {
    login.exibir();
  } else {
    dados.userNameSet();
  }
});

document.querySelector("#loginEnterBtn").addEventListener("click", () => {
  let user = login.entrar();
  dados.setUser(user);
  dados.userNameSet();
});

document.querySelector("#loginCloseBtn")
.addEventListener("click", login.sair);

document.querySelector("#openMenu").addEventListener("click", menu.exibir);

document.querySelector("#closeMenu").addEventListener("click", menu.fechar);
