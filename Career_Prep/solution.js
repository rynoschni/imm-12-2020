function solution(A) {
  let num = 1;
  for (i = 0; i < A.length; i++) {
    for (j = 0; j < A.length; j++) {
      if (num !== A[j]) {
        null;
      } else {
        num++;
      }
    }
  }
  return num;
}
console.log(solution([1, -7, 6, 4, 1, 2, -2]));
