// Atividade 15 Crie uma função que conte quantas vezes um caractere aparece em uma string. 

function contarCaractere(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(contarCaractere("contagem de caracteres", "e")); // Exemplo: 3
