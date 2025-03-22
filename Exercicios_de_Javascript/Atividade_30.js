// Atividade 29 Verifique se uma lista está em ordem crescente.

function emOrdemCrescente(lista) {
    for (let i = 0; i < lista.length - 1; i++) {
        if (lista[i] > lista[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(emOrdemCrescente([1, 2, 3, 4, 5]));  // Exemplo de uso: true
console.log(emOrdemCrescente([1, 3, 2, 4, 5]));  // Exemplo de uso: false
