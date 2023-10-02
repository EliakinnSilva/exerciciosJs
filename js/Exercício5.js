// Calcular IMC e classificar

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

let peso = 70; // em kg
let altura = 1.75; // em metros

let classificacaoIMC = calcularIMC(peso, altura);
console.log(`O IMC é ${classificacaoIMC}`);
