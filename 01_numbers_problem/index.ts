//? 1. Print Numbers from 1 to N
function printNumbers(n: number) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
printNumbers(5);

//? 2. Print Numbers from N to 1 without changing the loop condition of above question
function printNumbersFromNTo1(n: number) {
  for (let i = 1; i <= n; i++) {
    console.log(n - i + 1);
  }
}
printNumbersFromNTo1(5);

//? 3. Print All Even Numbers from 1 to N
function printEvenNumbers(n: number) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }
}
printEvenNumbers(12);

//? 4. Sum of First N Natural Numbers
function sumOfFirstNnaturalNums(n: number): number {
  return (n * (n + 1)) / 2;
}
console.log(sumOfFirstNnaturalNums(10));

//? 5. Product (Factorial) of N
function factorial(n: number): number {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));

//? 6. Sum of All Even Numbers up to N
function sumOfEvenNumsUpToN(n: number): number {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}
console.log(sumOfEvenNumsUpToN(10));

//? 7. Sum of Nth Even Number
function sumOfNthEvenNum(n: number): number {
  return n * (n + 1);
}
console.log(sumOfNthEvenNum(4)); //* 2 + 4 + 6 + 8 = 20

//? 8. Sum of Nth Odd Number
function sumOfNthOddNum(n: number): number {
  return n * n;
}
console.log(sumOfNthOddNum(4)); //* 1 + 3 + 5 + 7 = 16

//? 9. Print Squares of  Numbers from 1 to N
function printSquareOfNumsFrom1ToN(n: number) {
  for (let i = 1; i <= n; i++) {
    console.log(i ** 2);
  }
}
printSquareOfNumsFrom1ToN(4); //* 1, 4, 9, 16

//? 10. Print Cubes of  Numbers from 1 to N
function printCubeOfNumsFrom1ToN(n: number) {
  for (let i = 1; i <= n; i++) {
    console.log(i ** 3);
  }
}
printCubeOfNumsFrom1ToN(4); //* 1, 8, 27, 64

//? 11. Sum of Cubes of Numbers from 1 to N
function sumOfCubeNumsUpToN(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }
  return sum;
}
console.log(sumOfCubeNumsUpToN(3)); //* 1 + 8 + 27 = 36

//? 12. Print Numbers Divisible by 3 and 5 up to N
function divisibleBy3And5UpToN(n: number) {
  for (let i = 3; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log(i);
  }
}
divisibleBy3And5UpToN(30); //* 15, 30
