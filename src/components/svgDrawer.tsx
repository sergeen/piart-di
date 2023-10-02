// JSDoc
/** Esta función crea una matriz bidimencional que tiene como intención
 * principal ser el "estado" actual de un elemento. El cual luego se usa
 * para hacer la representación en el DOM.
 */

export function createMatrix(xElements, yElements) {
    let matrix = new Array();
    for (let i = 0; i < yElements; i++) {
        matrix.push(new Array(xElements).fill(0));
    }
    console.log("Matrix created: " + matrix.length + " / " + matrix[0].length)
    return matrix;
}

/** Esta función crea una representación para colocar en el DOM.
 * Se le pasa una matriz bidimencional y a partir de eso representa
 * una estructura de DIVs que equivale a esa matriz.
 * Retorna un nodo
 */
export function createDivGrid(matrix) {
    const gridOfDivs = document.createElement("div");
    gridOfDivs.className = "gridOfDivs";

    for (matrixPositionY = 0; matrixPositionY < matrix.length; matrixPositionY++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "rowDiv";

        for (matrixPositionX = 0; matrixPositionX < matrix[matrixPositionY].length; matrixPositionX++) {
            const divColumn = document.createElement("div");
            divColumn.className = "cellDiv";
            divColumn.setAttribute("ypos", matrixPositionX);
            divColumn.setAttribute("xpos", matrixPositionY);
            rowDiv.appendChild(divColumn);
        }

        gridOfDivs.appendChild(rowDiv);

    }
    return gridOfDivs;
}

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