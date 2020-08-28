
const read = require('readline-sync')

// 1. Crie uma função que receba uma temperatura em Celsius e chame uma função 
// que converta para Fahrenheit. F = 9*C/5 + 32

let temperatura = read.question("Qual a temperatura ")

// (0 °C × 9/5) + 32 = 32 °F
//(32 °F − 32) × 5/9 = 0 °C


function calcularTemperatura(num){
    console.log((num -32) * 5/9)
}
calcularTemperatura(temperatura)