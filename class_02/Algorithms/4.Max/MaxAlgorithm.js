// 최대값 알고리즘(Max Algorithm): 주어진 범위에 주어진 조건에 자료들 중 가장 큰 값(Value)

//[문제] 주어진 데이터 중에서 가장 큰 값(Valus)

function Max() {

  //[0] Initialize(초기화): 숫자 형식의 데이터 중 가장 작은 값으로 초가화

  let max = Number.MIN_SAFE_INTEGER;  // 숫자 형식의 데이터 중 가장 작은 값으로 초기화

  //[1] Input(입력)

  let numbers = [-2, -5, -3, -7, -1];  // MAX: -1

  //[2] Process(처리): MAX

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {  // 더 큰 데이터가 있다면
      max = numbers[i];  // 더 큰 값으로 할당
    }
  }

  //[3] Output(출력)

  console.log('최대값' + max);

}

Max();
