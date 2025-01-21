// dom.js

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.dir(document);
  document.forms.myForm.addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 기능 차단.
    let mid = document.querySelector('input[name="member_id"]').value;
    let mname = document.querySelector('input[name="member_name"]').value;
    let mpoint = document.querySelector('input[name="member_point"]').value;

    if (mid == null || mid.length < 5 || mid.length > 20) {
      alert("id를 5자 이상 20자 이하로 생성해주세요");
      return; // 함수종료.
    }
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    let Id = document.createTextNode(mid); //td.innerText = mid 회원ID
    td.appendChild(Id);


    let td2 = document.createElement('td');
    let Name = document.createTextNode(mname); //td.innerText = mname 회원이름
    td2.appendChild(Name);


    let td3 = document.createElement('td');
    let Point = document.createTextNode(mpoint); //td.innerText = mpoint 회원점수
    td3.appendChild(Point);

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);

    console.log(tr); // <tr></tr>

    // tbody의 하위요소로 추가.
    document.querySelector('#list').appendChild(tr);
  }) // end of sumit

  // input 값이 change 이벤트 등록.
  document.querySelector('thead input').addEventListener('change', function() {
    // tbody input 값을 변경
    document.querySelectorAll('tbody input').forEach(function(item) {
      item.checked = document.querySelector('thead input[type="checkbox"]').checked;
    });
  });

} // end of init()



 // let member = [mid, mname, mpoint]
 // let tr = makeTrAry(member);

  function makeTrAry() {
    let tr = document.createElement('tr');

    mbr.forEach(function(item) {
      let td = document.createElement('td');
      td.innerText = item;
      tr.appendChild(td);
    });
    return tr;
  } // end of makeTrAry

  let member = {
    memberID: mid,
    memberName: mname,
    memberPoint: mpoint
  };
  let tr = makeTr(member); // 값
   // let member = [mid, mname, mpoint]
   // let tr = makeTrAry(member);


  function makeTr(mbr = {}) {
    // <tr><td>admin</td>.........</tr> 필요한 함수: createElement, appendChild
    // <td>admin</td>
    // <td>김관리</td>
    // <td>120</td>
    // </tr>
    let tr = document.createElement('tr'); // td*3을 자식요소로 가질 부모
    // <td><input type="checkbox"></td>

    for (let prop in mbr) {
      let td = document.createElement('td'); // 회원ID, 회원이름, 회원점수
      td.innerText = member[prop];
      tr.appendChild(td);
    }
    // <td><buttion>삭제</buttion></td>
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.style.backgroundColor = 'yellow';
    btn.innerHTML = '삭제' ;
    btn.addEventListener('click', function() {
      btn.parentElement.parentElement.remove();
    });

  
    tr.appendChild(btn);
    tr.appendChild(td);

    return tr; //return undefied;
  } // end of makeTr()