// Atividade 28 Crie uma função que multiplique todos os elementos de uma lista. 

function multiplicarElementos(lista) {
    return lista.reduce((produto, num) => produto * num, 1);
}

console.log(multiplicarElementos([1, 2, 3, 4]));  // Exemplo de uso: deve retornar 24
