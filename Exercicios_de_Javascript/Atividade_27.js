// Atividade 27 Crie uma função que retorne a soma dos números pares de uma lista. 

function somaPares(lista) {
    let soma = 0;
    for (let num of lista) {
        if (num % 2 === 0) {
            soma += num;
        }
    }
    return soma;
}

console.log(somaPares([1, 2, 3, 4, 5, 6]));  // Exemplo de uso: deve retornar 12
