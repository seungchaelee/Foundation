// 등차수열(Arithmetic Sequence): 연속하는 두 수의 차익사 일정한 수열

//[문제] 1부터 20까지의 정수 중 홀수의 합을 구하시오

//[1] Input(입력)

let sum = 0; //Sum
let sequence = '';

//[2] Process(처리)

for (let i = 0; i <= 20; i++) { //주어진 범위
  if (i % 2 ==1) { //주어진 조건: 필터링(홀수)    (!(i % 2 != 1) 부정의 부정 = 긍정
    sequence += i + ' '; // 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    sum += i; //Sum = sum + 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19
  }
}

//[3] Output(출력)

console.log(sequence); //SEQUENCE -> Arithmetic Sequence
console.log('1부터 20까지의 홀수의 합:' + sum); //100
