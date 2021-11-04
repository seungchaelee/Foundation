// 합계 알고리즘(Sum Algorithm): 주어진 범위에 주어진 조건에 해당하는 값(Value)들의 합계.

//[문제] n명의 점수 중에서 80점 이상인 점수의 합계

//[1] Input(입력): n명의 점수

let scores = [100, 75, 50, 37, 90, 95];
let sum = 0; // 합계가 담길 그릇
let N = scores.length; // 의사코드

//[2] Process(처리): 합계 알고리즘 영역: 주어진 범위에 주어진 조건(필터링)

for (let i = 0; i < N; i++) { // 주어진 범위
  if (scores[i] >= 80) {  // 주어진 조건
    // sum = sum + scores[i];
    sum += scores[i]; // Sum = scores[0] + scores[5] + scores[6]
  }
}

//[3] Output(출력)

console.log(N + '명의 점수 중 80점 이상의 총점: ' + sum);


// const a = 1;
// const b = 2;
// const c = 3;

// console.log(a + b);
// console.log(a + c);
// console.log(b + c);

// var x;

// x = 10;
// console.log(x); //10

// x += 5;
// console.log(x); //15

// x -= 5;
// console.log(x); //10

// x *= 5;
// console.log(x); //50

// x /= 5;
// console.log(x); //10

// x %= 5;
// console.log(x); //0
