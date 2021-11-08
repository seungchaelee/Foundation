// 최솟값 알고리즘(Min Algorithm): 주어진 범위에 주어진 조건에 자료들 중 가장 작은 값(Value)

//[문제] 주어진 데이터 중에서 가장 작은 값(Valus)

function Min() {

  //[0] Initialize(초기화)

  let min = Number.MAX_SAFE_INTEGER

  //[1] Input(입력)

  let numbers = [0, 1, 2, 3, 4, -5];

  //[2] Process(처리): Min

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  //[3] Output(출력)

  console.log('최솟값' + min);

}

Min();
