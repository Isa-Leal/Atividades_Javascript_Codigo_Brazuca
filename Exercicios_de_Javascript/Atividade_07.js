// Atividade 7 Verifique se um número é primo.

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(11));  // Exemplo: true
console.log(isPrime(4));   // Exemplo: false