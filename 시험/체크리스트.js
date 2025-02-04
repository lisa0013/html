// 버튼에 클릭이벤트 등록.
let todoList = [];

document.querySelector('button[name="add"]').addEventListener('click',function() {
  //입력값.
  let todo = document.querySelector('#item').value;
  todoList.push(todo);
  document.querySelector('#itemList').innerHTML = makeList();
  // span요소에 이벤트등록.
  document.querySelectorAll('span,close').forEach(function (item){
    item.addEventListener('click', function() {
      item.parentElement.remove();
    });
  })
  console.log(todoList);
});

// li요소 생성함수.
function makeList() {
  let html = "<ul>";
  for(let i = 0; i < todoList.length; i++) {
    html += "<li>" + todoList[i] + "<span class='close'>X</span></li>"
  }
  html += "</ul>";
  return html;
}