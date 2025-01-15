// todo1.js

//두 수:1 ~ 100까지 임의수 생성
//두 수를 더한 값이 
<<<<<<< HEAD
//let sumEven = 10; // 짝수의 값은 sumEven에 합하기.
//let sumOdd = 20;  //홀수의 값은 sumOdd에 합하기.


=======

let number1 = parseInt(Math.random() * 100) + 1;
let number2 = parseInt(Math.random() * 100) + 1;
console.log(number1, number2);

let sumEven = 10; // 짝수의 값은 sumEven에 합하기.
let sumOdd = 20; // 홀수의 값은 sumOdd에 합하기.

// truthy(10, "aaa", true) vs. falsy (0, "", null, undefined)

if ((number1 + number2) % 2) {
  result = number1 + number2;
  sumOdd += result;
} else {
  result = number1 + number2;
  sumEven += result;
}
if ((number1 + number2) % 2 == 0) {
  result = number1 + number2;
  sumEven += result;
} else {
  result = number1 + number2;
  sumOdd += result;
}
console.log(`sumEven의 값은 ${sumEven}, sumOdd의 값은 ${sumOdd}`);


// 1 ~ 10 무작위 숫자 3개 생성
// 3개의 숫자 중 같은 숫자가 몇 개 있는지 console에 출력
// 예) 생성된 숫자가 7, 7, 4 일 경우 2 출력
// 모두 다를 경우 0 출력

let num1 = parseInt(Math.random() * 10) + 1;
let num2 = parseInt(Math.random() * 10) + 1;
let num3 = parseInt(Math.random() * 10) + 1;
console.log(num1, num2, num3);
if (num1 == num2 || num2 == num3 || num1 == num3) {
  console.log(2);
} else if (num1 != num2 && num2 != num3 && num1 != num3) {
  console.log(0);
} else {
  console.log("번외");
}


//두 수를 입력 받아서 첫번째 값에 15를 더하고 두번째 값에 2를 나눠서 두수의 차를 구해보세요
//94576분은 몇 일, 몇 시간, 몇 분 입니까?
//세 수 중에서 제일 작은 값을 출력

let Value1 = parseInt(prompt("첫번째 값을 입력하세요: "));
let Value2 = parseInt(prompt("두번째 값을 입력하세요: "));
Value1 += 15;
Value2 /= 2;
let Resutl = parseInt(Value1) - parseInt(Value2);
console.log(`${Value1}와 ${Value2}의 값을 뺀 결과: ${Resutl}`);

let time = parseInt(prompt("94576분은 몇 일, 몇 시간, 몇 분 입니까? "));
let day = parseInt(time / 1440);
let hour = parseInt((time % 1440) / 60);
let minute = time % 60;
console.log(`${day}일 ${hour}시간 ${minute}분 입니다`)

let Num1 = parseInt(Math.random() * 10) + 1;
let Num2 = parseInt(Math.random() * 10) + 1;
let Num3 = parseInt(Math.random() * 10) + 1;
console.log(Num1, Num2, Num3);

if (Num1 < Num2) {
  if (Num1 < Num3) {
    console.log(Num1);
  } else {
    console.log(Num3);
  }
} else {
  if (Num2 < Num3) {
    console.log(Num2);
  } else {
    console.log(Num3);
  }
}
>>>>>>> 15f8a508c0c4dbd87b8d4b63b515ce8e8259f79c
