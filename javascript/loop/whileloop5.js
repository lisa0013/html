// whileloop5.js
let members = [];
let 내친구 = "김민식";
members[0] = {member_id: "user01", member_name: "홍길동",point: 80}
members[1] = {member_id: "user02", member_name: "신현욱",point: 90}
members[2] = {member_id: "user03", member_name: 내친구, point: 85}

let run = true;
while (run) {
  let searchName = prompt("찾을 친구 이름 입력: ");
  if (searchName == 'stop') {
    run = false;
    break;
  }
    let exists = false; // 존재여부를 담아놓기.
  for (let i = 0; i < members.length; i++) {
    // 배열의 이름속성중에서 searchName과 같으면 포인트를 콘솔출력.
    if (members[i].member_name == searchName) {
      alert(`${searchName}의 포인트는 ${members[i].point}`);
      exists = true;
      break;
    }  
  }
  if (!exists) {
    alert("찾는 친구이름이 없습니다.");
  }
} // end do while.
console.log('end of program.');
