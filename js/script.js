function calcular() {
    
    var terreno = document.getElementById('terreno').value;
    terreno = Number.parseFloat(terreno);

    var ocupacao = document.getElementById('ocupacao').value;
    ocupacao = Number.parseFloat(ocupacao);
        
    var coeficiente = document.getElementById('coeficiente').value;
    coeficiente = Number.parseFloat(coeficiente);

    var permeabilidade = document.getElementById('permeabilidade').value;
    permeabilidade = Number.parseFloat(permeabilidade);

    var res_ocupacao = (terreno*ocupacao) / 100;

    var res_coeficiente = terreno*coeficiente;

    var res_permeabilidade = (terreno*permeabilidade) /100;


    if (ocupacao <= 0 || isNaN(ocupacao)) {

        document.getElementById('res1').innerHTML = ''
    }
    else {
        document.getElementById('res1').innerHTML = (`Você pode ocupar até ${res_ocupacao} M² do seu terreno`);
    }

    if (coeficiente <= 0 || isNaN(coeficiente)){
    
        document.getElementById('res2').innerHTML = ''
    
    }
    else {
        document.getElementById('res2').innerHTML = (`Você pode construir até ${res_coeficiente} M² em seu terreno`);
    }

    if (permeabilidade <= 0 || isNaN(permeabilidade)){

        document.getElementById('res3').innerHTML = ''
    }
    else {
        document.getElementById('res3').innerHTML = (`Você precisa ter no mínimo ${res_permeabilidade} M² de área livre para permeabilização`);
    }

    
}

function limpar(){ 
    document.getElementById('res1').innerHTML = ''
    document.getElementById('res2').innerHTML = ''
    document.getElementById('res3').innerHTML = ''

}
var btnC = document.getElementById('btn-calcula');
var btnL = document.getElementById('btn-limpar');

function entrouC(){
    btnC.style.background= 'rgba(169, 169, 169, 0.582)';
}

function saiuC(){
    btnC.style.background= 'rgb(130, 179, 211)';
}
function entrouL(){
    btnL.style.background= 'rgba(169, 169, 169, 0.582)';
}

function saiuL(){
    btnL.style.background= 'darkgrey';
}
