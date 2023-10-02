/** Las funciones ATTACH van a ser las que manipulen el DOM, por ahora
 * La idea es que esta función pueda devolver el elemento al que luego se le pueden
 * agregar los event listeners. Como una forma de poner todo secuencialmente y evitar
 * que un paso se escape...
 */
export function attachDivGrid(rootDiv, gridOfDivs) {
  rootDiv.appendChild(gridOfDivs);
  const cellDivs = document.querySelectorAll('.cellDiv');
  return cellDivs;
}

// export function editCellDiv(matrix, xpos, ypos, value) {
//     const newMatrix = matrix;
//     newMatrix[xpos][ypos] = value;
//     console.log(newMatrix);
//     return newMatrix;
//     // (matrix && matrix[xpos]) ? newMatrix = matrix[x][y] = value : "no matrix provied"
// }