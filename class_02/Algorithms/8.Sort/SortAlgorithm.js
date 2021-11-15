// 정렬 알고리즘(Sort Algorithm): 가장 [ 큰 | 작은 ] 데이터를 왼쪽으로 순서대로 이동

//[문제] 무작위 데이터를 순서대로 [ 오름차순(ASC) | 내림차순(DESC) ] 정렬

function Sort() {

  //[1] Input(입력): Data Structure(Array, List, Stack, Queue, Tree, DB, ...)

  let data = [3, 2, 1, 5, 4]; // 정렬되지 않은 데이터
  let N = data.length;

  //[2] Process(처리): Selection Sort(선택 정렬)

  for (let i = 0; i < N - 1; i++) { // i = 0 to N - 1
    for (let j = i + 1; j < N; j++) { // j = i + 1 to N
      if (data[i] > data[j]) {  // 부등호 방향: 오름차순(>), 내림차순(<)
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp; // Swap
      }
    }

    console.log((i + 1) + '회전: ');
    for (let i = 0; i < N; i++) {
      console.log(data[i]);
    }

  }

  //[3] Output(출력): UI(Console, Desktop, Web, Mobile, ...)

  // for (let i = 0; i < N; i++) {
  //   console.log(data[i]);
  // }

}

Sort();
