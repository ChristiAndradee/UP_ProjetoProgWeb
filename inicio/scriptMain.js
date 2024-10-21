const btnLogin = document.getElementById('btnLogin');
const btnSair = document.getElementById('btnSair');

btnLogin.onclick = function () {
    login.showModal();
}

btnSair.onclick = function () {
    login.close();
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

            /* window.location.href = "diretório do novo HTML para a página de cadastro das músicas"; */
        }
    });

    let usuarioLogado = sessionStorage.getItem('usuarioLogado');

    if(!usuarioLogado){
        let erro = document.createElement('p');
        erro.classList.add("erro");
        
        /* Arrumar a mensagem de erro de email/senha errados */
    }
});