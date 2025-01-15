// whileloop3.js
//object 타입.

let myInfo = {
  name: "홍길동",
  age: 20,
  height: 170,
  weight: 65
}; // object. 
console.log(myInfo);
console.log(myInfo.weight);
console.log(myInfo.weight);


let myfriends=[{name: "감자", age: 20},{name: "양파", age: 20}];
//console.log(myfriends[0].name);
//console.log(myfriends[1].name);

for(var i = 0 ; i < myfriends.length ; i++){
  if(myfriends[i].name == '감자'){
    console.log(myfriends[i].name);
  }else{
    console.log(1);
  }
}


// console.log(`이름: ${myInfo.name}, 나이: ${myInfo['age']}`);
// console.log(`키: ${myInfo.height}, 몸무게: ${myInfo['weight']}`);
// //for..in 반복문.
// for (let prop in myInfo) {
//   console.log(`속성: ${prop}, 값: ${myInfo[prop]}`);
// }

// let nameAry = ['홍길동', '김민석', '박석민', '김민수'];
// for (let name of nameAry) {
//   console.log(`값: ${name}`);
// }


// let myFriend1 = {
//   name: "홍길동",
//   phone: "010-1111-2222",
//   address: "대구 중구 100번지"
// }
// let myFriend2 = {
//   name: "김민수",
//   phone: "010-3333-4444",
//   address: "대구 중구 200번지"
// }
// let myFriend3 = {
//   name: "김민석",
//   phone: "010-5555-6666",
//   address: "대구 중구 300번지"
// }
// let myFriend4 = {
//   name: "박석민",
//   phone: "010-7777-8888",
//   address: "대구 중구 400번지"
// }

// let friends = [myFriend1, myFriend2, myFriend3];
// friends[3] = {name: "박창석", phone: "010-1234-1234", address: "대구 중구 500번지"}
// console.log(friends[0].name);
// console.log(friends[1]['phone']);
// console.log(friends[2]['address']);
// for (let i = 0; i < friends.length; i++){
//   // 친구이름.
//   console.log(`이름: ${friends[i].name}, 연락처: ${friends[i]['phone']}, 주소: ${friends[i]['address']}`);
// }