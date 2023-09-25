  // Usando API CEP -> https://viacep.com.br/
  function endereco() {
    var cep = document.getElementById("cep1").value;
    console.log(cep);

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(corpo => {
            console.log(corpo);

            document.getElementById("rua").value = corpo.logradouro;
            document.getElementById("bairro").value = corpo.bairro;
            document.getElementById("cidade").value = corpo.localidade;
            document.getElementById("estado").value = corpo.uf;

            var estado = corpo.uf;
            var frete = "";

            // Norte
            if (estado == "AC" || estado == "AP" || estado == "AM" || estado == "PA" ||
                estado == "AM" || estado == "RO" || estado == "RR" || estado == "TO") {
                frete = "Frete: 11,50 R$";
            }

            // Nordeste
            if (estado == "MA" || estado == "PI" || estado == "CE" || estado == "RN" || estado == "PB" ||
                estado == "PE" || estado == "AL" || estado == "SE" || estado == "BA") {
                frete = "Frete: 9,90 R$";
            }

            // Sul
            if (estado == "PR" || estado == "SC" || estado == "RS") {
                frete = "Frete: 7,10 R$";
            }

            // Sudeste
            if (estado == "ES" || estado == "MG" || estado == "RJ" || estado == "SP") {
                frete = "Frete grátis";
            }

            // Centro-Oeste
            if (estado == "GO" || estado == "MT" || estado == "MS" || estado == "DF") {
                frete = "Frete: 10,50 R$";
            }

            // Defina o valor do frete no campo de entrada
            document.getElementById("frete").value = frete;
        })
        .catch(error => {
            console.error("Erro ao buscar o CEP:", error);
            document.getElementById("frete").value = "Erro ao buscar o CEP.";
        });
}
