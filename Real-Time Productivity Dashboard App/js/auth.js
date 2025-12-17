let registerbtn = document.getElementById("registerBtn");
registerbtn.addEventListener("click", registeruser);

let usernameInput = document.getElementById("newUsername");
let emailInput = document.getElementById("newemail");
let passwordInput = document.getElementById("newPassword");

function registeruser() {
  let username = usernameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;

  const user = {
    username,
    email,
    password,
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Registration Successful! Please Login.");
  window.location.href = "index.html";
}
