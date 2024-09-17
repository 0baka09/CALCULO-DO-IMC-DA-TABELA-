var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var Paulo = document.querySelector("#paciente1");
var Peso1 = Paulo.querySelector(".info-peso").textContent;
var Altura1 = Paulo.querySelector(".info-altura").textContent;
var Imc = Peso1 / (Altura1 * Altura1);
Paulo.querySelector(".info-imc").textContent = Imc;