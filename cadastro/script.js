// LOGIN
const btnSair = document.getElementById('btnSair');

btnSair.onclick = function() {
    window.location.href = "../inicio/index.html";
}

const login = document.getElementById('login');
const formLogin = document.querySelector('#janelaLogin');

let usuarioMaster = [
    {nome: "Mr. Ryann", email: "manoValim@gmail.com", senha: "cadernoehvida123"},
    {nome: "Sr. Christian", email: "amazonSegunda@gmail.com", senha: "tercafestiva123"}
]

formLogin.addEventListener('submit', evento =>{
    evento.preventDefault();

    let msgErro = document.querySelector('.erro');
    if(msgErro) login.removeChild(msgErro);
    let email = document.getElementById('email').value; //document refere-se ao HTML, pegar por id
    let senha = document.getElementById('senha').value;

    usuarioMaster.forEach(usuario =>{
        if(email == usuario.email && senha == usuario.senha){
            sessionStorage.setItem('usuarioLogado', true);
            sessionStorage.setItem('nomeUsuario', usuario.nome);

            window.location.href = "../inicio/index.html";
        }
    }); //Foreach 

    let usuarioLogado = sessionStorage.getItem('usuarioLogado');

    if(!usuarioLogado){
        let erro = document.createElement.add("p");
        erro.classList.add("erro");
        erro.innerText = "login ou senha invalidos!";
        login.insertBefore(erro, login.firstElementChild);
        document.querySelector("#login form").reset(); //Reseta o formulario
    } //eventlister e document vai cair na prova

});

