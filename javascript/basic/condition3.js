//condition3.js
//2개의 숫자를 입력.
//2개 짝수 => "모두 짝수."
//1개 짝수 => "하나는 짝수."
//0개 => "짝수는 없습니다."

let num = prompt("첫번째 숫자를 입력하세요.");
let num2 = prompt("두번째 숫자를 입력하세요.");

if(num % 2 ==0 && num2 % 2 ==0){
  console.log("모두 짝수");
}else if(num % 2 ==0 || num2 % 2 ==0){
  console.log("하나는 짝수");
}else{
  console.log("짝수는 없습니다.");
}
