// 최빈값 알고리즘(Mode Algorithm): 점수 인덱스(0~n)의 개수(Count)의 최댓값(Max)

//[문제] 주어진 데이터에서 가장 많이 나타난(중복된) 값

(function Mode() {

  //[1] Input(입력): 범위는 0부터 n점까지의 점수만 들어온다고 가정

  let scores = [1, 3, 4, 3, 5]; // 0~5까지만 들오온다고 가정
  let indexes = Array(6).fill(0); // 0~5까지 점수 인덱스의 개수 저장
  let max = Number.MAX_SAFE_INTEGER; // MAX 알고리즘 적용
  let mode = 0; // 최반값이 담길 그릇

  //[2] Process(처리): Data -> Index -> Count -> Max -> Mode

  for (let i = 0; i < scores.length; i++) {
    indexes[scores[i]]++; // Count
  }

  //[3] Output(출력)

    console.log("최빈값: " + mode + " -> " + max + " 번 나타남");

})();
