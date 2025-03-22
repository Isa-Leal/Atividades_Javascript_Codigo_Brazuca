// Atividade 12 Crie uma função que calcule o fatorial de um número.

function fatorial(num) {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(fatorial(5));  // Exemplo: 120