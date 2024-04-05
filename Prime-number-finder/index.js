// javascript
function isPrime(num) {
 if (num < 2) return false;
 for (let i = 2; i <= Math.sqrt(num); i++) {
 if (num % i === 0) return false;
 }
 return true;
}
function findPrimes() {
 const inputArray = document.getElementById("numberArray").value.split(',').map(Number);
 const primeArray = inputArray.filter(isPrime);
 document.getElementById("result").textContent = `Prime Numbers: [${primeArray.join(', ')}]`;
};
