// 최솟값 알고리즘(Min Algorithm): 주어진 범위에 주어진 조건에 자료들 중 가장 작은 값(Value)

//[문제] 주어진 데이터 중에서 가장 작은 [짝수] 값(Valus)

function Min() {

  //[0] Initialize(초기화)

  let min = Number.MAX_SAFE_INTEGER // 숫자 형식의 데이터 중 가장 큰 값으로 초기화

  //[1] Input(입력)

  let numbers = [0, -3, -2, 3, 4, 7];  // Min: -3 -> Min: -2(짝수)

  //[2] Process(처리): Min

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min && numbers[i] % 2 == 0) { // 찍수 최솟값
      min = numbers[i]; // Min: 더 작은 값으로 할당
    }
  }

  //[3] Output(출력)

  console.log('최솟값' + min);

}

Min();
