const exibir = () => {
  const loginDiv = document.querySelector(".login");
  loginDiv.style.display = "flex";
};

const entrar = () => {
  const inputUser = document.querySelector("#inputUser").value;

  const loginInput = document.querySelector("#loginInput");
  loginInput.style.display = "none";

  const loginOutput = document.querySelector("#loginOutput");
  loginOutput.style.display = "flex";

  return inputUser;
};

const sair = () => {
  const loginDiv = document.querySelector(".login");
  loginDiv.style.display = "none";
};

export { exibir, entrar, sair };