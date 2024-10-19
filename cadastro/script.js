// MODAL
const btnLogin = document.getElemenyById('btnLogin');
const btnSair = document.getElementById('btnSair');

btnLogin.onclick = function() {
    btnLogin.showModal();
}

btnSair.onclick = function() {
    btnSair.close();
}

// LOGIN
const login = document.getElementById('login');
