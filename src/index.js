// You should implement your task here.
 
// Сортировка чисел по возрастанию 
 
function great(a,b) {
  if (a > b) {
    return 1;
  }
}
 
// Сортировка по убыванию 
 
function less(a,b) {
  if (a < b) {
    return 1;
  }
}
 
module.exports = function towelSort (matrix) {
  if(matrix == undefined) {
    return [];
  }
  let resArr = [];
  for(let i =0; i < matrix.length; i++) {
    let cmp = great;
    if (i % 2 != 0) {
      cmp = less;
    }
    matrix[i].sort(cmp);
    for(let j = 0; j < matrix[i].length; j++) {
      resArr.push(matrix[i][j]);
    }
  }
  return resArr;
}
