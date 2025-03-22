// Atividade 24 Crie uma função que retorne os divisores de um número. 

function divisores(num) {
    let divisores = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

console.log(divisores(12));  // Exemplo de uso: deve retornar [1, 2, 3, 4, 6, 12]
