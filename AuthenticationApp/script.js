let Remail = document.getElementById('newemail');
let Rusername = document.getElementById('newUsername');
let Rpassword = document.getElementById('newPassword');

function register(){
    let email = Remail.value;
    let username = Rusername.value;
    let password = Rpassword.value;

    console.log("Registered with Email: " + email + ", Username: " + username + ", Password: " + password);

    if (!username || !email || !password) {
    alert("All fields required");
    return;
  }

  const user={email: email, username: username, password: password};
  console.log(user);

    // localStorage.setItem('email', email);
    // localStorage.setItem('username', username);
    // localStorage.setItem('password', password);
    //or

    localStorage.setItem('user', JSON.stringify(user));

    alert("Registration Successful");

    //after registration redirect to login page
    window.location.href = "index.html";
}






let Lusername = document.getElementById('username');
let Lpassword = document.getElementById('password');
let LloginButton = document.getElementById('loginButton');

// Add event listener to login button
LloginButton.addEventListener('click',login);

function login(){
    let username = Lusername.value;
    let password = Lpassword.value;
    // Retrieve stored user data from localStorage and parse it to an object and store it in a variable storedUser
    const storedUser = JSON.parse(localStorage.getItem('user'));

     if (!storedUser) {
    alert("No user found. Please register.");
    return;
  }
    if(username === storedUser.username && password === storedUser.password){
        alert("Login Successful"); 
        //yep, set a flag in localStorage to indicate that the user is logged in ,hum isiliye kar rahe hai taaki dashboard page pe check kar sake ki user logged in hai ya nahi
        localStorage.setItem("isLoggedIn", "true");
        //after login redirect to home page
        window.location.href = "dashboard.html";
    }
    else {
    alert("Invalid credentials");
  }
}
// Function to check if user is logged in
function checkAuth() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    window.location.href = "index.html";
  }
}

// On dashboard page load, check if user is authenticated
if (window.location.pathname.includes("dashboard")) {
  checkAuth();

  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("user").innerText =
    "Hello, " + user.username;
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
}

