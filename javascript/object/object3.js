// object3.js
// forEach()
let numAry = [20, 13, 45, 62, 19];
let sum = 0;
let max = 0;
numAry.forEach(function (item, idx, ary) {
  //console.log(`item => ${item}`);
  if (idx % 2 == 0) {
console.log(`item ${item}`);
    sum += item;
  }
  // 큰값.
  if(max < item){
    max = item
  }
});
console.log(`홀수의 위치 합계 ${sum}, 최고값 ${max}`);

// filter(function(item, idx, ary){}) 조건을 만족하는 배열생성.
let filterAry = numAry.filter(function(item, idx, ary){
  if(item % 2 == 1){
    return true;
  }else{
    return false;
  }
});
console.log(filterAry);