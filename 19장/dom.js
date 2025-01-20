// dom.js
// Document Object Model
// let myPicture = {name: "해와 달", width: 200, heigth: 300} => property(속성).
// <img src="small.jpg"> => attribute(속성).
document.addEventListener('DOMContentLoaded', attrChangeFunc);

function attrChangeFunc(e) {
 console.log(e);

 // 대상선택.
 document.querySelectorAll('div#small-pic>img').forEach(function(item) {
  console.log(item);
   // img 이벤트 등록
   item.addEventListener('mouseover', function(e) {
    console.log(e.target.src);
    document.querySelector('#prod-pic>img').src = e.target.src;
   })
 });

// button 대상 선택1.
document.querySelector('button').addEventListener('click', function() {
  let itemname = document.querySelector('#desc>ul>li:nth-of-type(1)>span').innerText;
  let price = document.querySelector('#desc>ul>li:nth-of-type(2)>input').value;
  let logis = document.querySelector('#desc>ul>li:nth-of-type(3)>input').value;

  itemname = document.querySelectorAll('#desc>ul>li')[0].firstElementChild.innerText;
  price = document.querySelectorAll('#desc>ul>li')[1].lastElementChild.value;
  logis = document.querySelectorAll('#desc>ul>li')[2].children[1].value;
  console.log(itemname, price, logis);
  alert(`${itemname}(결제금액: ${parseInt(price) >= 50000 ? parseInt(price): parseInt(price)+parseInt(logis)}원)`);
});

} // end of attrChangeFunc

//요소의 값을 변경.
function domChangeFunc() {

let heading = document.getElementById('heading');
heading.onclick = function() {
  heading.innerText = "추천! 오늘의 커피";
  document.getElementById('cup').src = "images/coffee-blue.jpg";
}
console.log(heading);


 let detail = document.querySelector('#detail>ul');
 detail.innerHTML = '<li>사과</li><li>바나나</li>';
 console.log();
 // console.log(detail.innerHTML);
 // console.log(detail.textContent);
}

// DOM 요소의 선택.
function domFunc() {
  let targetItem = document.getElementById('container'); // id값으로 선택.
  targetItem = document.querySelector('#container'); //

  targetItem = document.getElementsByClassName('small'); //  HTMLCollection([배열]).
  for(let i = 0; i < targetItem.length; i++) {
    console.log(targetItem[i].src);
  }
  targetItem = document.querySelectorAll('.small'); // NodeList([배열]).
  targetItem.forEach(function(item) {
    item.style.borderColor = 'red';
    item.style.borderWidth = '3px';
    item.style.borderStyle = 'solid';
  });
  targetItem = document.getElementsByTagName('img'); // HTMLCollection([배열]).
  targetItem = document.querySelectorAll('img'); // NodeList
  console.log(targetItem);
} // end of domFunc().

