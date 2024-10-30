const btnLogin = document.getElementById('btnLogin');
const btnSair = document.getElementById('btnSair');

btnLogin.onclick = function () { login.showModal(); };
btnSair.onclick = function () { 
    login.close(); 

    let msgErro = document.querySelector('.erro');
    if (msgErro) msgErro.remove();
};

const login = document.getElementById('login');
const formLogin = document.querySelector("#login form");

let usuarioMaster = [
    {nome: 'root', email: 'root@email.com', senha: 'root'},
    {nome: 'Christian', email: 'christian@email.com', senha: '1234'},
    {nome: 'Ryann', email: 'ryann@email.com', senha: '4321'}
];

formLogin.addEventListener('submit', evento => {
    evento.preventDefault(); // Impede o envio do formulário

    let msgErro = document.querySelector('.erro');
    if (msgErro) msgErro.remove();

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let loginSucesso = false;

    usuarioMaster.forEach(usuario => {
        if (email === usuario.email && senha === usuario.senha) {
            sessionStorage.setItem('usuarioLogado', true);
            sessionStorage.setItem('nomeUsuario', usuario.nome);

            loginSucesso = true;

            window.location.href = "../usuario/index.html";
        }
    });

    if (!loginSucesso) {
        let erro = document.createElement('p');
        erro.classList.add("erro");
        erro.innerText = "Login ou senha inválidos!";
        login.insertBefore(erro, login.firstChild);
        formLogin.reset();
    }
});