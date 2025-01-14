//basic3.js
/*
두 숫자를 입력받아서 두수의 곱을 출력.
첫번째 값에 5의 값을 더하고, 두번째 3의 값을 빼서 두수의 차를 구해보세요.
*/
let firstValue = parseInt(prompt("첫번째 값을 입력하세요: "));
let SecondValue = prompt("두번째 값을 입력하세요: ");
firstValue += 5;//parseInt(firstValue) + 1;
SecondValue -= 3;//parseInt(SecondValue) -1;
//console.log(firstValue, SecondValue);
//let Result = ++firstValue % --SecondValue;
let Resutl = firstValue - SecondValue
console.log(`${firstValue}와 ${SecondValue}의 값을 뺀 결과: ${Result}`);
