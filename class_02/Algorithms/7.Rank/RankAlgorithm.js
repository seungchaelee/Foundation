// 순위 알고리즘(Rank Algorithm): 점수 데이터에 대한 순위 구하기

//[문제] 주어진(지정한 범위) 데이터의 순위(등수)를 구하는 로직

function Rank() {

  //[1] Input(입력)

  let scores = [90, 97, 100, 95, 77]; // 등수: 4, 2, 1, 3, 5
  let N = scores.length;  // 의사코드(슈도코드)
  let rankings = Array(N).fill(1);  // 모두 1로 초기화

  //[2] Process(처리): Rank

  for (let i = 0; i < N; i++) {

    rankings[i] = 1;  // 1등으로 초기화, 순위 배열을 매 회전마다 1등으로 초기화

    for ( let j = 0; j < N; j++) {

      if (scores[i] < scores[j]) {  // 현재(i)와 나머지들(j) 비교
        rankings[i]++;  // Rank 알고라줌: 나보다 큰 점수가 나오면 순위 1증가
      }

    }

  }


  //[3] Output(출력)

  for (let i = 0; i < N; i++) {
    console.log(scores[i].toString().padStart(3) + ' 점: ' + rankings[i] + ' 등 ');
  }

}

Rank();
