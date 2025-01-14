//278 시간 => ?일 ?시간 입니다.
//입력받은 값을 기준으로 일을 계산(입력받은 값/ 24시간 => 일).
//전체갑셍서 나머지 계산(입력받은 값% 24시간 => 시간).
let time = parseInt(prompt("값을 입력하세요: "));
let day = parseInt(time / 24);
let hour = time % 24;
console.log(`${day}일 ${hour}시간 입니다`)

//89345 분 => ?일 ?시간 ?분 입니다.
let time2 = parseInt(prompt("값을 입력하세요: "));
let day2 =  parseInt(time2 / 1440); 
let hour2 = parseInt((time2 % 1440) /60);
let minute = time2 % 60;
console.log(`${day2}일 ${hour2}시간 ${minute}분 입니다`)
