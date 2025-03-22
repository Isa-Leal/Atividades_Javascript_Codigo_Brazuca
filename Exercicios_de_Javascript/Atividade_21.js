// Atividade 21 Verifique se dois números são múltiplos.

function saoMultiplos(a, b) {
    return a % b === 0 || b % a === 0;
}

console.log(saoMultiplos(10, 5)); // Exemplo: true
console.log(saoMultiplos(10, 3)); // Exemplo: false
