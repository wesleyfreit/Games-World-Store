let user;

const setUser = (inputUser) => {
  if (localStorage.userSave) {
    user = JSON.parse(localStorage.getItem("userSave"));
  } else {
    user = inputUser;
    localStorage.userSave = JSON.stringify(user);
  }
};

const verificarUser = () => {
  if (localStorage.userSave)
    user = JSON.parse(localStorage.getItem("userSave"));
  if (user) {
    return true;
  }
  return false;
};

const userNameSet = () => {
  if (localStorage.userSave)
    user = JSON.parse(localStorage.getItem("userSave"));
  const h3 = document.querySelector("#userName");
  h3.textContent = user;
}

export { setUser, verificarUser, userNameSet };