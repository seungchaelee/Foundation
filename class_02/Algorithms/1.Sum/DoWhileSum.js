// do 문을 사용하여 1부터 5까지 정수의 합

let sum = 0;
let i = 1;                      // 초기식

do {
  sum += i;                     // 실행문
  i++;                          // 증감식
} while (i <= 100);             // 조건식

console.log('합계: ' + sum);     // 15
