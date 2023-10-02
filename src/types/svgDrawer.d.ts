declare module 'svgDrawer' {
  export function createMatrix(xElements : number, yElements: number) : [];
  export function createDivGrid(matrix: []) : {};
  export function attachDivGrid(rootDiv: {}, gridOfDivs: {}) : {};
  // export declare function editCellDiv(matrix, xpos, ypos, value);
}