// Write a program that checks if a number is even or odd and displays the result.

function checkEvenOdd ( num ){
    if (num % 2 === 0){
        return `${num} is even`
    }

    else  return `${num} is odd`
};

console.log(checkEvenOdd(30));
console.log(checkEvenOdd(23));