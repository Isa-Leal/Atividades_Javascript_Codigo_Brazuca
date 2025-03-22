// Atividade 20 Crie uma função que retorne a soma dos dígitos de um número.

function somaDosDigitos(num) {
    return num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
}

console.log(somaDosDigitos(123)); // Exemplo: 6
