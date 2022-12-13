var titulo = document.querySelector(".titulo"); // o query seleciona o que queremos
titulo.textContent = "Aparecida Nutricionista" // com o textcontent, alteramos a String


var pacientes = document.querySelectorAll(".paciente");//selecionado todos (ALL) os pacientes

//fazendo um for para iteração

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];
	//Definindo as variáveis necessarias para os cálculos.
    var tdPeso = paciente.querySelector(".info-peso"); //seleciona a tag
    var peso = tdPeso.textContent; //seleciona o conteudo da tag

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

	//Validando os dados ou não para o cálculo do IMC.

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
				paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
				paciente.classList.add("paciente-altura-invalido");
    }

	//calculando o IMC

  	if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
       // tdImc.textContent = imc;
	   tdImc.textContent = imc.toFixed(2);//mudamos para o toFixed(2) - arredondando para duas casas depois da vírgula
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});
