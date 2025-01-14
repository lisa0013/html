// condition5.js
// 두 수: 1 ~ 100까지 임의의 값을 생성.
// 큰수에서 작은 수 빼서 결과값을 출력.

let num1 = parseInt(Math.random()* 100) + 1;
let num2 = parseInt(Math.random()* 100) + 1;
let num3 = parseInt(Math.random()* 100) + 1;
//세수중에서 제일 큰 값을 출력.
console.log(num1, num2, num3);
if(num1 > num2){
  if(num1 > num3){
    console.log(num1);
  }else{
    console.log(num3);
  }
}else {
  if(num2 > num3){
  console.log(num2);
}else{
  console.log(num3);
}
}
//두수중에서 큰수에서 작은수 빼기문제.
//console.log(num1, num2);
//let result = num1 - num2;
//if(result < 0){
//  result = num2 - num1;
//}
//console.log(`큰수에서 작은수를 뺀 결과값: ${result}`);