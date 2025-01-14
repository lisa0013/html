//basic1.js
/*
 변수 선언: 이름, 연락처, 주소 선언.
 console 출력.
 */
let myname = "yuongseo";
let myphone = "101-1111-1111";
let myaddr = "대구광역시";

let largeNumber = 100000000000000000000000000000000000000000000000000000000000000000000000000n;
console.log(largeNumber);

const bloodType = "O";
//bloodType = "A";
const PI = 3.14;  //프로그램 변하지 않는 값으로 선언.

myname = "김길동";

console.log("내 이름은 " + myname + "입니다.");
console.log('연락처는 ' + myphone + '입니다.');
console.log(`주소는 ${myaddr} 입니다.`);

console.log(`반지름 5인 원의 넓이는 ${5 * 5 * PI} 입니다.`)

let myInfo = {
  name: "홍길동",
  age: 20
};

let scores = [10, 20, 30]; // 배열.
let specialType = null;

console.log(typeof specialType); // 변수의 자료형을 출력.