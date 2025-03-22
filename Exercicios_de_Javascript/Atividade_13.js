// Atividade 13 Imprima a sequência de Fibonacci até o décimo termo. 

function fibonacci() {
    let a = 0, b = 1, c;
    console.log(a); // Imprime 0
    console.log(b); // Imprime 1
    for (let i = 2; i < 10; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

fibonacci();