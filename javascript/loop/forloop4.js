//forloop4.js
// 0 <= Math.random()*100 < 100 => 50부터 100.   //Math.random() 0 <= x < 1 >>>>
// 학생 10명의 임의 점수를 배열에 저장.

let scores = [];
let sum = 0; // 합계를 담을 변수
let max = 0; // 최대값을 담을 변수

for (let i = 0; i < 10; i++) {
  scores[i] = parseInt(Math.random() * 51) + 50; // 50 <= x <= 100
  console.log(scores[i]);
}

//평균계산.
for (let i = 0; i < 10; i++) {
  sum += scores[i]; //합계 구하기.
}
console.log(`평균: ${sum / 10}`);

for (let i = 0; i < 10; i++) {
  if (max < scores[i]) { //최대값 구하기.
    max = scores[i];
  }
}
console.log(`${max}`);