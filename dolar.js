function buscaPrecoDolar() {
    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
        .then(response => response.json())
        .then(data => {
            const usdToBrl = parseFloat(data.USDBRL.bid);

            // Seleciona todos os elementos com a classe "valorDolar"
            const valoresDolar = document.querySelectorAll(".valorDolar");

            // Itera sobre cada elemento e atualiza seu valor em dólar
            valoresDolar.forEach(element => {
                const precoEmDolar = parseFloat(element.textContent);
                const precoEmReal = precoEmDolar * usdToBrl;
                // Encontra o elemento irmão com a classe "valorReal" e atualiza seu conteúdo
                element.nextElementSibling.textContent = precoEmReal.toFixed(2);
            });
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
}

// Atualize os preços a cada 5 segundos (ou o intervalo desejado)
setInterval(buscaPrecoDolar, 5000);
buscaPrecoDolar(); // Chame a função imediatamente ao carregar a página
