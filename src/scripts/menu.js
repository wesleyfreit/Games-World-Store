const menuOutside = document.querySelector("#navMenu");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

const exibir = () => {
  menuOutside.classList.toggle("active");
  closeMenu.style.display = "inline";
  openMenu.style.display = "none";
};

const fechar = () => {
  menuOutside.classList.toggle("active");
  openMenu.style.display = "inline";
  closeMenu.style.display = "none";
};

export { exibir, fechar };