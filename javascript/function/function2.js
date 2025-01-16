// function2.js
/*
  함수이름: getMax
  매개변수: 배열(numAry)
  기능: 배열의 요소중에서 제일큰값을 콘솔출력.
*/

let ary1 = [3, 15, 22, 7];
let ary2 = [23, 11, 45, 30];
let ary3 = [];
for (let i = 0; i < 5; i++) {
  ary3[i] = parseInt(Math.random() * 50);
}
console.log(ary3);

function getMax(ary = []) { // 매개변수로 받은 값 중에서 제일 큰 요소를 출력.
  let max = 0; // 제일 큰 값을 담아놓을 변수선언.
  console.log(ary);
  for (let i = 0; i < ary.length; i++) { // 배열을 다 비교하도록 반복문.
    if (max < ary[i]) {
      max = ary[i]; // 제일 큰 값 max에 저장하기.
    }
  }
  console.log(`제일 큰 값은 ${max}입니다.`);
  return max; // 함수를 호출한 영역으로 반환.
} // end of getMax()

document.write(getMax(ary1));
// alert(getMax(ary2));
getMax(ary3);