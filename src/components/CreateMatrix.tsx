// JSDoc
/** Esta función crea una matriz bidimencional que tiene como intención
 * principal ser el "estado" actual de un elemento. El cual luego se usa
 * para hacer la representación en el DOM.
 */
const CreateMatrix = (size : number) : boolean[][] => {
  if (typeof size !== "number" || size < 1) {
      throw new Error("Invalid size. Size must be a positive number.");
  }
  const matrix = new Array(size).fill(new Array(size).fill(false));
  console.log(`A ${size} x ${size} matrix has been created`);
  return matrix;
}

export default CreateMatrix;