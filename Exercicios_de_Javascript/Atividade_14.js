// Atividade 14 Remova todos os espaços de uma string.

function removerEspacos(str) {
    return str.replace(/\s+/g, ''); // Remove todos os espaços
}

console.log(removerEspacos("Remover todos os espaços!"));
