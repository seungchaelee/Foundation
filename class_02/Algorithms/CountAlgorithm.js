// 개수 알고리즘(Count Algorithm): 주어진 범위에 주어진 조건에 해당하는 값(Value)들의 개수.

//[문제] 1부터 1,000까지의 정수 중 13의 배수의 개수(건수, 횟수)

//[1] Input(입력): 1부터 1,000까지의 데이터

let count = 0;  //개수를 저장할 변수는 0으로 초기화
let sequence = '';

//[2] Process(처리): 개수 알고리즘 영역: 주어진 범위에 주어진 조건(필터링)

for (let i = 1; i <= 1000; i++) {
  if (i % 13 == 0) {
    // count = count + 1;
    // count += 1;
    count++;
    sequence += i + ' ';
  }
}

//[3] Output(출력)

console.log(sequence);
console.log('1부터 1,000까지의 정수 중 13의 배수의 개수: ' + count);
