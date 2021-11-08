// 쵀대값 알고리즘(Max Algorithm): 주어진 범위에 주어진 조건에 자료들중 가장 큰 값(Value)

//[문제] 주어진 데이터 중에서 가장 큰 값(Valus)

function Max() {

  //[0] Initialize(초기화): 숫자 형식의 데이터 중 가장 작은 값으로 초가화

  let max = Number.MIN_SAFE_INTEGER;

  //[1] Input(입력)

  let number = [-2, -5, -3, -7, -1];

  //[2] Process(처리): MAX

  for (let i = 0; i < number.length; i++) {
    if (number[i] > max) {
      max = number[i];
    }
  }

  //[3] Output(출력)

  console.log('최대값' + max);

}

Max();
