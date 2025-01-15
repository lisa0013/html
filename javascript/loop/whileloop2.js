// whileloop2.js
// stop 을 입력하면 반복문 종료.
// 입력한 값중에서 제일 큰 값을 출력.

let run = true;
let max = 0;
//반복문 밖 한번만 실행됨

while (run) {
  let inputValue = prompt("점수를 입력하세요:");
  // 입력값이 숫자인지 아닌지 구분.
  // 숫자가 아니면 => stop인지 아닌지 구분.
  // 숫자이면 => 최고점수를 구하고.
  let temp = parseInt(inputValue); // isNaN(temp)
  if (isNaN(temp)) {
    if (inputValue == 'stop') {
      run = false;
    } else {
      alert('정상적인 값을 입력하세요.')
    }
  } else { //문자가 아니라면 ??
    if (max < parseInt(inputValue)) {
      max = parseInt(inputValue)
    }
  }
}
// end of while.
console.log(`최고점수: ${max}`)