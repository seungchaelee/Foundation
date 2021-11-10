// 근삿값 알고리즘(Near Algorithm): 가까운 값 -> 차잇값의 절대값의 최솟값

//[문제] 원본 데이터 중에서 대상 데이터와 가장 가까운 값

function Near() {

  //[0] Initialize(초기화)

  let min = Number.MAX_SAFE_INTEGER;

  //[1] Input(입력)

  let numbers = [10, 20, 30, 40, 50];
  let target = 25;
  let near = 0;

  //[2] Process(처리): Near



  //[3] Output(출력)

  console.log(target + '와/과 가장 가까운 값: ' + near + '(차이: ' + min + ')');

}

Near();
