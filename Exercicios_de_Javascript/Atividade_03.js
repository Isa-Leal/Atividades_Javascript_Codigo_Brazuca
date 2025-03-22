// Atividade 3 Verifique se um número é par ou ímpar.

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(verificarParOuImpar(4));  // Exemplo: Par
console.log(verificarParOuImpar(7));  // Exemplo: Ímpar
