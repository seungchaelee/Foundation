// 병합 알고리즘(Merge Algorithm): 오름차순으로 정렬되어 있는 정수 배열을 하나로 병합

//[문제] 2개의 정수 배열 합치기 단) 2개의 배열은 오름차순으로 정렬되어 있다고 가정

(function() {

  //[1] Input

  let first = [1, 3, 5]; // 오름차순 정렬됨
  let second = [2, 4]; // 오름차순 정렬됨
  let M = first.length;
  let N = second.length; // M:N 관행
  let merge = Array(M + N).fill(0); // 병합된 배열을 담을 그릇
  let i = 0;
  let j = 0;
  let k = 0; // i, j ,k 관행

  //[2] Process



  //[3] Output

  for (let i = 0; i < M + N; i++) {
    console.log(merge[i]);
  }

})();
