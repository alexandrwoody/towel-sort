
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let res = [];
  if (Array.isArray(matrix) && matrix.length !== 0) {
    matrix.forEach((element, index) => {

      if (index % 2 === 0) res.push(...element);
      else res.push(...(element.reverse()))
    });
  }
  return res;
}
