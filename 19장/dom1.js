// dom1.js

// element(tag) vs. node
document.addEventListener('DOMContentLoaded', function() {
  let container = document.querySelector('#container');
  console.dir(container.children);

  document.querySelector('button').addEventListener('click', function() {
    // container.children[0].innerHTML = 'Hello';
    // container.childNodes[1].innerHTML = 'Hello';
    // 상세설명이 보이도록.
    container.children[3].style.display = "block"; // 자식요소가 뭔지 먼저 파악하기.
    // document.querySelector('#detail>ul').innerHTML += '<li>가공법 : 워시드</li>';
    let item =  document.createElement('li'); // Element 생성.
    let txt = document.createTextNode('가공법 : 워시드'); // TextNode 생성.
    
    item.appendChild(txt); // 부모.appendChild(자식)

    
    console.log(item);
    document.querySelector('#detail>ul').appendChild(item);
  });
})
