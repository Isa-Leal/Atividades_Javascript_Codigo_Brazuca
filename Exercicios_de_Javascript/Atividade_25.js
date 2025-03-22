// Atividade 25 Substitua todas as vogais de uma string por '*'. 

function substituirVogais(str) {
    return str.replace(/[aeiouAEIOU]/g, '*');
}

console.log(substituirVogais("Hello World"));  // Exemplo de uso: "H*ll* W*rld"
