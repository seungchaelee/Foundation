// 순위 알고리즘(Rank Algorithm): 점수 데이터에 대한 순위 구하기

//[문제] 주어진(지정한 범위) 데이터의 순위(등수)를 구하는 로직

function Rank() {

  //[1] Input(입력)

  let scores = [90, 97, 100, 95, 77]; // 등수: 4, 2, 1, 3, 5
  let N = scores.length;
  let rankings = Array(N).fill(1);  // 모두 1로 초기화

  //[2] Process(처리): Rank

  for (let i = 0; i < scores.length; i++) {
    
  }


  //[3] Output(출력)

  for (let i = 0; i < scores.length; i++) {
    console.log(scores[i].toString().padStart(3) + ' 점: ' + rankings[i] + ' 등 ');
  }

}

Rank();
