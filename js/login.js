const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const user = document.querySelector("#user");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
}else{
    paint(saveUsername);
}

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const inputUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, inputUsername);
    paint(inputUsername);
}

function paint(username){
    user.innerText = `Welcome ${username}`;
    user.classList.remove(HIDDEN_CLASSNAME);
}