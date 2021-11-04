// 등차수열(Arithmetic Sequence): 연속하는 두 수의 차익사 일정한 수열

//[문제] 1부터 20까지의 정수 중 홀수의 합을 구하시오

//[1] Input(입력)

let sum = 0; //Sum

//[2] Process(처리)

for (let i = 0; i <= 20; i++) { //주어진 범위
  if (i % 2 ==1) { //주어진 조건: 필터링(홀수) !(i % 2 != 1)
    sum += i; //Sum
  }
}

//[3] Output(출력)

console.log('1부터 20까지의 홀수의 합:' + sum); //100
