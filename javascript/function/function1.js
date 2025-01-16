//function1.js
let numAry1 = [10, 20, 30];
let numAry2 = [40, 50, 60];
let numAry3 = [70, 80, 90];

// 기능의 정의. 함수의 정의구문에서는 변수.
function arraySum(numAry = []){
let sum =0;
for(let i = 0; i < numAry.length; i ++){
  sum += numAry[i];
}
console.log('합계: ' + sum);
} // end of arraySum()

arraySum(numAry1); // 함수를 호출해서 실행할때는 값.
arraySum(numAry2);
arraySum(numAry3);

