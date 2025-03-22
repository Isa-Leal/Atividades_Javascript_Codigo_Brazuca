// Atividade 11 Verifique se um número está presente em uma lista.

function numeroNaLista(lista, num) {
    return lista.includes(num);
}
console.log(numeroNaLista([1, 2, 3, 4], 3));  // Exemplo: true
console.log(numeroNaLista([1, 2, 3, 4], 5));  // Exemplo: false