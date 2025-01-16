// function4.js

// 이벤트 - 이벤트핸들러.
let item = document.querySelector('button');
console.log(item);

item.addEventListener('click', function(){
  alert('마우스가 클릭됨');
});

item.addEventListener('mouseover', function(){
 item.style.backgroundColor = 'yellow';
});

document.querySelector('button').addEventListener('mouseout', function(){
  item.style.backgroundColor = null;
 });