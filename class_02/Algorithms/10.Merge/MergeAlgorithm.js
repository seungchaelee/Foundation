// 병합 알고리즘(Merge Algorithm): 오름차순으로 정렬되어 있는 정수 배열을 하나로 병합

//[문제] 2개의 정수 배열 합치기 단) 2개의 배열은 오름차순으로 정렬되어 있다고 가정

(function Merge() {

  //[1] Input(입력)

  let first = [1, 3, 5]; // 오름차순 정렬됨
  let second = [2, 4]; // 오름차순 정렬됨
  let M = first.length;
  let N = second.length; // M:N 관행
  let merge = Array(M + N).fill(0); // 병합된 배열을 담을 그릇
  let i = 0;
  let j = 0;
  let k = 0; // i, j ,k 관행

  //[2] Process(처리): Merge 알고리즘

  while (i < M && j < N) { // 둘 중 하나라도 배열의 끝에 도달할 때까지
    if (first[i] < second[j]) { // 더 작은 값을 merge 배열에 저장
      merge[k] = first[i];  // 작은 값 대입 후 각가의 인덱스 증가
      k++;
      i++;
    }
    else {
      merge[k++] = second[j++]; // 작은 값 대입 후 각가의 인덱스 증가
    }
  }
  while (i < M) { // 첫 번째 배열이 끝까지 도달할 때까지
    merge[k++] = first[i++];
  }
  while (j < N) { // 두 번째 배열이 끝까지 도달할 때까지
    merge[k++] = second[j++];
  }

  //[3] Output(출력)

  for (let i = 0; i < M + N; i++) {
    console.log(merge[i]);
  }

})();
