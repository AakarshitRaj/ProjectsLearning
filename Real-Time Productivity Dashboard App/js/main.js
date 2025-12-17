import { loginUser } from "./storage.js";

let usernameinput = document.getElementById('username');
let passwordinput = document.getElementById('password');
let loginbutton = document.getElementById('loginBtn');

loginbutton.addEventListener('click',loginuser);

function loginuser(){
    let username = usernameinput.value;
    let password = passwordinput.value;

    //it works without storage.js
    // const user=localStorage.getItem('user');
    // const parsedUser=JSON.parse(user);
    // if(user){
    //     if(username === parsedUser.username && password === parsedUser.password){
    //         alert("Login Successful!");
    //         window.location.href = "dashboard.html";
    //     }
    // }else{
    //     alert("Invalid Credentials. Please try again.");
    // }

    const userLoggedIn = loginUser(username,password);
    
    if(userLoggedIn){
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else{
        alert("Invalid Credentials. Please try again.");
    }
}
        
