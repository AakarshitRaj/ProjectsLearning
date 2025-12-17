import {checkAuth,logout} from './storage.js';

checkAuth();

const user = localStorage.getItem('user');

document.getElementById('welcome').innerText=`Welcome, ${JSON.parse(user).username}!`;

document.getElementById('logoutBtn').addEventListener('click', logout);