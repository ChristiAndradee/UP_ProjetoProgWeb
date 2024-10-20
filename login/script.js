// LOGIN
const btnSair = document.getElementById('btnSair');

btnSair.onclick = function() {
    window.location.href = "../inicio/index.html";
}

const login = document.getElementById('login');
const formLogin = document.querySelector('#login form');

let usuarioMaster = [
    {nome: "Mr. Ryann", email: "manoValim@gmail.com", senha: "cadernoehvida123"},
    {nome: "Sr. Christian", email: "amazonSegunda@gmail.com", senha: "tercafestiva123"}
]

formLogin.addEventListener('submit', evento =>{
    evento.preventDefault();

    let msgErro = document.querySelector('.erro');
    if(msgErro) login.removeChild(msgErro);

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    usuarioMaster.forEach(usuario =>{
        if(email == usuario.email && senha == usuario.senha){
            sessionStorage.setItem('usuarioLogado', true);
            sessionStorage.setItem('nomeUsuario', usuario.nome);

            window.location.href = "../inicio/index.html";
        }
    });

    let usuarioLogado = sessionStorage.getItem('usuarioLogado');

    if(!usuarioLogado){
        let erro = document.createElement('p');
        erro.classList.add("erro");
        erro.innerText = "Login ou senha invalidos!";

        /* ADICIONAR CAMINHO PARA PRINTAR A MENSAGEM DE ERRO */
    }
});