// Atividade 10  Conte quantas vogais existem em uma string. 

function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVogais("exemplo"));  // Exemplo: 3