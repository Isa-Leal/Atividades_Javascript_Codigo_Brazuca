// Atividade 16 Crie uma função que retorne se uma string é um palíndromo.

function ehPalindromo(str) {
    const strReversa = str.split('').reverse().join('');
    return str === strReversa;
}

console.log(ehPalindromo("arara"));  // Exemplo: true
console.log(ehPalindromo("teste"));  // Exemplo: false
