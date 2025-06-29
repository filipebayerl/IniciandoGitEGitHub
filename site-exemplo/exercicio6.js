/*
    Verificador de Positivo ou Negativo 

    Crie um programa que receba um número e diga se ele é positivo, negativo ou zero. 

    Dica: Use condicionais (if). */

    
// Verificador de Positivo ou Negativo
let numero = Number(prompt("Informe um número:"));

if (isNaN(numero)) {
  alert("Isso não é um número válido.");
} else {
  if (numero > 0) {
    alert("O número é positivo.");
  } else if (numero < 0) {
    alert("O número é negativo.");
  } else {
    alert("O número é zero.");
  }
}
    
