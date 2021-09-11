import { Injectable } from '@nestjs/common';

@Injectable()
export class Exercise3Service {
    helloWorld(name : string){
        return "Hello There" + name;
    }

    loopsTriangle(height: number){
       for(var i = 1; i <= height; i++){
           var string = ' ';
           var j = i;
           while(j){
               string += '*';
               j--;
           }
           console.log(string);
       }
       return;
    }
    primeNumber(number: number){
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
            return number + "is a prime number? true"
        } else {
            return number + "is a not prime number? false"
            }
        }
    }
}
