// 연습1. exe1.js
let myFriends = [];
myFriends.push({name: "홍길동", escore: 70, kescore: 78, gender: 'Female'});
myFriends.push({name: "신현욱", escore: 80, kescore: 88, gender: 'Female'});
myFriends.push({name: "김민식", escore: 90, kescore: 70, gender: 'Male'});
myFriends.push({name: "석지욱", escore: 95, kescore: 55, gender: 'Female'});

// forEach: 콘솔출력
// myFriends.forEach(function(item, idx, ary){
//   console.log(`${item.name}`);
// });

// forEach: 콘솔출력 영어점수가 90이상.
// myFriends.forEach(function(item, idx, ary){
//   if (90 <= item.escore) {
//     console.log(`${item.escore}`);
//   }
// });

// forEach: 콘솔출력 평균점수가 80이상.
// myFriends.forEach(function(item, idx, ary){
//      sum = item.escore + item.kescore
//      avg = sum / 2
//   if (80 <= avg) {
//        console.log(`${avg} ${item.name}`);
//      }
//    });

// forEach: 콘솔출력 여학생의 영어평균.
let sum = 0, avg = 0, cnt = 0;
 myFriends.forEach(function(item, idx, ary){
     if (item.gender == 'Female') {
       sum +=  item.escore;
       cnt++;
      }
    });
    avg = sum / cnt; // 합계 / 여학생수 => 평균
    console.log(`${avg}`);

// filter: 여학생의 영어평균 미만 => underAvgAry 저장.
let underAvgAry = myFriends.filter(function(item, idx, ary){
if(item.gender == 'Female' && item.escore < avg){
  return true;
}
});
console.log(`${underAvgAry}`);
console.log(underAvgAry);
