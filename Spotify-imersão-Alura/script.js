const searchInput = document.getElementById('search-input'); /*Obtem o elemento com o id especificado */ 
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) { /*obtem o valor*/
    const url = `http://localhost:3000/artists?name_like=${searchTerm}` /* depois de artist significa passar um parâmetro para buscar o que foi digitado*//*name_like = nome parecido*//*$=string*//*{aqui vai a variável de parametro}*/
    fetch (url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultsArtist.classList.remove('hidden');
    }

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); /* toLowercase para ficar tudo minúsculo */
    if (searchTerm === '') {  /* 2 == significa comparação, se são iguais; 3 === significa comparação, se são iguais e do mesmo tipo */
       resultPlaylist.classList.add('hidden'); /* hidden significa esconder*/
       resultsArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})