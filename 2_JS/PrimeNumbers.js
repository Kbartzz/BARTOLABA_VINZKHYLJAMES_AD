
var number = 5;
let isPrime = true;

if (number > 1) {


    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number? true`);
    } else {
        console.log(`${number} is a not prime number? false`);
    }
}