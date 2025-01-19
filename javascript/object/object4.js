// object4.js
// 1일의 요일이 뭔지, 막날이 뭔지 알아야 달력 만듦.
let month = 2;
let date = 1;
let year = 2024;

let today = new Date();
today.setFullYear(year);
today.setMonth(month);
today.setDate(date);
console.log(today);

today = new Date(2024, 4, 3, 15, 30, 22 );
console.log(today);
//console.log(today, today.getDate());
//console.clear();
let a = {name:10};
let b = {age:10};
console.log(a == b);
console.log(a.name == b.age);

today = new Date();
let now = new Date();
console.log("여기");
console.log( today.getTime() == now.getTime());


console.log(new Date(now.getTime()));
console.log(today.valueOf() == now.valueOf());
console.log(today.valueOf()); 


//2022년 5월 
today.setFullYear(2022);
today.setMonth(4);

console.log(today);