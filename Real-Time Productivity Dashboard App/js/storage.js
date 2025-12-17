export function loginUser(username,password){
    const user=localStorage.getItem('user');
    const parsedUser=JSON.parse(user);
    
    username === parsedUser.username
    password === parsedUser.password

    if(username === parsedUser.username && password === parsedUser.password){
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', username);
        return true;
    }
    else{
        return false;
    }
}

export function logout(){
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = "index.html";
}

export function checkAuth(){
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn === 'true'){

        window.location.href = "dashboard.html";
    }
    else{
        window.location.href = "index.html";
    }
}