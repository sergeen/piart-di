// JSDoc
/** Esta función crea una matriz bidimencional que tiene como intención
 * principal ser el "estado" actual de un elemento. El cual luego se usa
 * para hacer la representación en el DOM.
 */

const CreateMatrix = (xElements : number, yElements : number) : boolean[][] => {
  let matrix: boolean[][] = [];
  for (let i = 0; i < yElements; i++) {
      matrix.push(new Array(xElements).fill(false));
  }
  console.log("Matrix created: " + matrix.length + " / " + matrix[0].length)
  return matrix;
}

export default CreateMatrix;