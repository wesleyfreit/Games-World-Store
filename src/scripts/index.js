import * as menu from "./menu.js";

document.querySelector("#openMenu")
.addEventListener("click", menu.exibir);

document.querySelector("#closeMenu")
.addEventListener("click", menu.fechar);