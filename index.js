(function() {
    const url = 'https://dummyjson.com/user/2';
    const paragrafoElemento = document.createElement('p');
    document.body.appendChild(paragrafoElemento);

    async function consumirURL() {
        try {
            const resposta = await fetch(url);
            const dados = await resposta.json();
            paragrafoElemento.textContent = JSON.stringify(dados);
        } catch (erro) {
            console.error('Erro ao consumir a URL:', erro);
        }
    }

    consumirURL();
})();
