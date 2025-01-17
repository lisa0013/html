// object1.js

let obj = {}; // 객체(인스턴스)
obj = new Object();

obj.title = "이것이자바다";
obj['price'] = 30000;

console.log(obj);

let today = new Date(); // 현재 날짜와 시간
console.log(today.getFullYear() + '년도'); // today 객체에서 현재 연도를 가져옴

//let numAry = new Array();
let numAry = [10, 20, 30];
numAry.push(40); // 배열의 젤 마지막에 40을 추가
numAry.unshift(5); // 배열의 젤 첫번째에 5를 추가
numAry.splice(1, 0, 8); // 5, 10, 20, 30, 40      

console.log(numAry);