// DEKLARASI VARIABEL
const container = document.querySelector(".container");
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");
const loginUsername = document.getElementById("logUsername");
const loginPassword = document.getElementById("logPassword");
const buttonLogin = document.getElementById("btnLogin");
const linkRegister = document.getElementById("register");
const registerUsername = document.getElementById("regUsername");
const registerPassword = document.getElementById("regPassword");
const validasiPassword = document.getElementById("valPassword");
const buttonRegister = document.getElementById("btnRegister");

// STYLING
document.body.style.backgroundColor = "#333";
formRegister.style.display = "none";
buttonLogin.style.backgroundColor = "lightskyblue";
buttonLogin.style.borderRadius = "8px";
linkRegister.style.backgroundColor = "tomato";
linkRegister.style.borderRadius = "8px";
buttonRegister.style.backgroundColor = "tomato";
buttonRegister.style.borderRadius = "8px";

// FUNCTION LOGIN
function onLogin() {
  // localStorage.setItem("username", loginUsername.value);
  // localStorage.setItem("password", loginPassword.value);

  if (localStorage.getItem("registerUsername") === loginUsername.value && localStorage.getItem("registerPassword") === loginPassword.value) {
    formLogin.style.display = "none";
    document.body.style.backgroundColor = "white";
    // membuat tampilan selamat datang
    let newImg = document.createElement("img");
    newImg.setAttribute("src", "assets/user.png");
    container.append(newImg);
    let newTitle2 = document.createElement("h2");
    newTitle2.innerText = `Selamat Datang ${loginUsername.value}!`;
    container.append(newTitle2);
  } else {
    alert("Pastikan Username Dan Password Sudah Benar Atau Registrasi Terlebih Dahulu");
  }
}

// FUNCTION LINK TO REGISTER
function toRegister() {
  formLogin.style.display = "none";
  formRegister.style.display = "flex";
}

// FUNCTION REGISTER
function onRegister() {
  if (registerUsername.value && registerPassword.value && validasiPassword.value !== null) {
    if (registerPassword.value == validasiPassword.value) {
      localStorage.setItem("registerUsername", registerUsername.value);
      localStorage.setItem("registerPassword", registerPassword.value);
      localStorage.setItem("validasiPassword", validasiPassword.value);

      alert("Data Anda Sudah Terkirim!");
      location.reload();
    } else {
      alert("Pastikan Kedua Password Sama!");
    }
  } else {
    alert("Data Tidak Boleh Kosong!");
  }
}
