const btnFeed = document.getElementById('btnFeed');
const btnEnviarFdbck = document.getElementById('btnEnviarFdbck');
const btnSairFdbck = document.getElementById('btnSairFdbck');
const formFeedback = document.getElementById('formFeedback');

btnFeed.onclick = function () {
    feed.showModal();
};

let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

btnEnviarFdbck.onclick = (e) => {
    e.preventDefault();

    let msgErro = document.querySelector('.erro');
    if (msgErro) msgErro.remove();

    const newsletter = document.getElementById('newsletterCheckbox').checked;
    const gostou = document.querySelector('input[name="gostouPlaylist"]:checked')?.value || 'não informado';
    const sugestao = document.getElementById('melhorias').value;

    const novoFeedback = {
        newsletter,
        gostou,
        sugestao,
    };

    feedbacks.push(novoFeedback);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    const mensagemSucesso = document.getElementById('feedbackMensagem');
    mensagemSucesso.textContent = 'Obrigado pelo seu feedback!';
    mensagemSucesso.style.display = 'block';

    formFeedback.reset();

    const feedbackMensagem = document.getElementById('feedbackMensagem');
    feedbackMensagem.style.display = 'block';
    feedbackMensagem.innerText = 'Obrigado pela sua contribuição!';
};

btnSairFdbck.onclick = function () {
    feed.close();
}

let dados = JSON.parse(localStorage.getItem('dados')) || [];

let genero = document.getElementById('gen');
let musica = document.getElementById('nomeMusica');
let artista = document.getElementById('nomeArtista');
let tempo = document.getElementById('tempoMusica');
let link = document.getElementById('linkMusica');
let editar = -1;

document.getElementById("formFavoritas").addEventListener('submit', e =>{
    e.preventDefault();

    const favPlayList = {
        genero: genero.value,
        musica: musica.value,
        artista: artista.value,
        tempo: tempo.value,
        link: link.value
    };

    if (editar === -1) {
        dados.push(favPlayList);
    } else {
        dados[editar] = favPlayList;
        editar = -1;
    }

    localStorage.setItem('dados', JSON.stringify(dados));

    window.location.href = "./index.html";

    const btnSalvar = document.getElementById('btnSalvar');
    btnSalvar.innerText = "Cadastrar";
    btnSalvar.style.backgroundColor = "";
});

function atualizarTabela() {
    const tbody = document.querySelector("#tabelaPlayList tbody");
    dados.forEach( (favPlayList, chave) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${favPlayList.musica}</td>
            <td>${favPlayList.artista}</td>
            <td>${favPlayList.genero}</td>
            <td>${favPlayList.tempo}</td>
            <td>
                <a href="#" onclick="abrirMusica('${favPlayList.link}')">Ouvir</a>
                <a href="#" onclick="removerMusica(${chave})" style="color: #e37171;">Excluir</a>
                <a href="#" onclick="editarMusica(${chave})" style="color: #4CAF50;">Editar</a>
            </td>
        `;
        tbody.appendChild(linha);
    });
}

function removerMusica(id) {
    dados.splice(id, 1);
    localStorage.setItem('dados', JSON.stringify(dados));
    window.location.reload();
}

function abrirMusica(link) {
    if (link) {
        window.open(link, '_blank');
    } else {
        alert("Link não disponível para esta música.");
    }
}

function editarMusica(id) {
    const favPlayList = dados[id];
    genero.value = favPlayList.genero;
    musica.value = favPlayList.musica;
    artista.value = favPlayList.artista;
    tempo.value = favPlayList.tempo;
    link.value = favPlayList.link;

    editar = id;
    const btnSalvar = document.getElementById('btnSalvar');
    btnSalvar.innerText = "Salvar";
    btnSalvar.style.backgroundColor = "#4CAF50";
}


window.onload = atualizarTabela;