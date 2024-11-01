const btnFeed = document.getElementById('btnFeed');
const btnEnviarFdbck = document.getElementById('btnEnviarFdbck');
const btnSairFdbck = document.getElementById('btnSairFdbck');

btnFeed.onclick = function () { feed.showModal(); };
btnEnviarFdbck.onclick = (e) => {
    e.preventDefault(); 

    let msgErro = document.querySelector('.erro');
    if (msgErro) msgErro.remove();

    alert('Obrigado pela sua contribuição!')
    feed.close(); 
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

document.getElementById("formFavoritas").addEventListener('submit', e =>{
    e.preventDefault();

    const favPlayList = {
        genero: genero.value,
        musica: musica.value,
        artista: artista.value,
        tempo: tempo.value,
        link: link.value
    };

    dados.push(favPlayList);

    localStorage.setItem('dados', JSON.stringify(dados));

    window.location.href = "./index.html";
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


window.onload = atualizarTabela;