document.addEventListener('DOMContentLoaded', function () {
  // #register 요소를 선택.
  let frm = document.querySelector('#register');
  frm.addEventListener('submit', function (e) {
    e.preventDefault(); // 기본기능차단.
    console.log(e);

    let userId = document.querySelector('#user-id').value;

    // 4~15자리.
    if (userId.length < 4 || userId.length > 15) {
      alert('4~15자리의 문자를 입력.');
      return;
    }

    // pw1, pw2 같아야.
    let userPw1 = document.querySelector('#user-pw1').value;
    let userPw2 = document.querySelector('#user-pw2').value;

    if(userPw1 != userPw2) {
      alert("비밀번호를 확인하세요.");
      return;
    }

    frm.submit(); //submit 이벤트 실행.

  });
});