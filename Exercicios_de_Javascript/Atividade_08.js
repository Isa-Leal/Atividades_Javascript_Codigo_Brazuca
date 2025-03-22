// Atividade 8 Crie uma função que retorne a média de uma lista de números.

function mediaLista(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma / lista.length;
}
console.log(mediaLista([1, 2, 3, 4, 5]));  // Exemplo: 3