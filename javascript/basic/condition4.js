// condition4.js

const obj = {
  name: "홍길동",
  age: 20,
  showName: function () { //메소드.
    console.log(obj.name);
  }
}
obj.showName();

// 1 ~ 10 사이의 임의수 출력.
console.log();// 0 <= x < 10 값의 출력.
let num1 = parseInt(Math.random()* 10) + 1;
let num2 = parseInt(Math.random()* 10) + 1;

console.log(num1, num2);

let sumEven = 10; // 짝수의 값은 sumEven에 합하기.
let sumOdd = 20; // 홀수의 값은 sumOdd에 합하기.

// truthy(10, "aaa", true) vs. falsy (0, "", null, undefined)

if(num1 % 2){
  sumOdd += num1;
}else{
  sumEven += num1;
}

if(num2 % 2 == 0){
  sumEven += num2;
}else{
  sumOdd += num2;
}

// sumEven, sumOdd 출력.
console.log(`sumEven의 값은 ${sumEven}, sumOdd의 값은 ${sumOdd}`);