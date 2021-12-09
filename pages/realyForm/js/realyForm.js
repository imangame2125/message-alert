const container = document.createElement('div');
const header = document.createElement('header');
const linkRegister = document.createElement('a')
const linkLogin = document.createElement('a')
header.className = 'header'
const h1 = document.createElement('h1');
document.body.appendChild(container);
container.appendChild(header);
container.className = 'container';
header.appendChild(h1);
h1.textContent = 'Welcom to my site';
const button = document.createElement('button');
const btn = document.createElement('button');
const divButton = document.createElement('div')
divButton.className = 'buttons'
container.appendChild(divButton)
divButton.appendChild(button)
divButton.appendChild(btn)
divButton.appendChild(linkRegister)
divButton.appendChild(linkLogin)
linkRegister.appendChild(button)
linkLogin.appendChild(btn)
linkRegister.href = '/pages/links/Register/register.htm'
linkLogin.href = '/pages/links/Login/login.htm'
button.textContent = 'Register';
btn.textContent = 'Login';


