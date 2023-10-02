//Média de notas e determinação de aprovação/reprovação
let notas = [8, 6, 7, 9, 5];

function calcularMedia(notas) {
    let soma = notas.reduce((a, b) => a + b, 0);
    return soma / notas.length;
}

let media = calcularMedia(notas);

if (media >= 7) {
    console.log("O aluno foi aprovado");
} else {
    console.log("O aluno foi reprovado");
}
