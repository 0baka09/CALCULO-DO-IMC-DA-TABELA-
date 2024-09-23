var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(`.paciente`);
for(let contador = 0; contador < pacientes.length; contador++){
    var peso = pacientes[contador].querySelector(`.info-peso`).textContent;
    var altura = pacientes[contador].querySelector(`.info-altura`).textContent;
    var imc = peso / (altura * altura);
    imc = parseFloat(imc);
    pacientes[contador].querySelector(`.info-imc`).textContent = imc.toFixed(2);
}
