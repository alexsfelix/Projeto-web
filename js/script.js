const btnCalcular = document.getElementById('btn-calcular').addEventListener('click', calcular);

const btnLimpar = document.getElementById('btn-limpar').addEventListener('click', limpar);

function calcular() {
    
    var terreno = document.getElementById('terreno').value;
    terreno = Number.parseFloat(terreno);

    var ocupacao = document.getElementById('ocupacao').value;
    ocupacao = Number.parseFloat(ocupacao);
        
    var coeficiente = document.getElementById('coeficiente').value;
    coeficiente = Number.parseFloat(coeficiente);

    var permeabilidade = document.getElementById('permeabilidade').value;
    permeabilidade = Number.parseFloat(permeabilidade);

    const res_ocupacao = (terreno*ocupacao) / 100;

    const res_coeficiente = terreno*coeficiente;

    const res_permeabilidade = (terreno*permeabilidade) /100;

    (ocupacao <= 0 || isNaN(ocupacao)) ? document.getElementById('res1').innerHTML = '' : document.getElementById('res1').innerHTML = (`Você pode ocupar até ${res_ocupacao} M² do seu terreno`);

    (coeficiente <= 0 || isNaN(coeficiente)) ? document.getElementById('res2').innerHTML = '' : document.getElementById('res2').innerHTML = (`Você pode construir até ${res_coeficiente} M² em seu terreno`);

    (permeabilidade <= 0 || isNaN(permeabilidade)) ? document.getElementById('res3').innerHTML = '' : document.getElementById('res3').innerHTML = (`Você precisa ter no mínimo ${res_permeabilidade} M² de área livre para permeabilização`);
}

function limpar(){ 
    document.getElementById('res1').innerHTML = ''
    document.getElementById('res2').innerHTML = ''
    document.getElementById('res3').innerHTML = ''
}