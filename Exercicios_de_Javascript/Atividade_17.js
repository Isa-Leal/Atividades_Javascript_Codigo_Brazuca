// Atividade 17 Crie uma função que ordene uma lista de números. 

function ordenarLista(lista) {
    return lista.sort((a, b) => a - b); // Ordenação crescente
}

console.log(ordenarLista([5, 2, 8, 1, 3])); // Exemplo: [1, 2, 3, 5, 8]
