/** @type {string} */
const color = 123

export const svgDrawer = {

  //JSDoc
  /** Esta funcion crea una matriz bidimencional
   * @param {number} xElements - Debe ser un entero
   * @param {number} yElements - Debe ser un entero
   */

  createMatrix(xElements, yElements) {
      let container = new Array();
      for (i = 0; i < yElements; i++) {
          container.push(new Array(xElements));
      }
      return container;
  },

  createGridofDivElements(pixelGrid) {
      const containerDiv = document.createElement("div");
      containerDiv.className = "container-div";
      for (row = 0; row < pixelGrid.length; row++) {
          const rowDiv = document.createElement("div");
          rowDiv.className = "row-div";
          for (column = 0; column < pixelGrid[row].length; column++) {
              const columnDiv = document.createElement("div");
              columnDiv.className = "pixel-div";
              columnDiv.setAttribute("pos-x", column);
              columnDiv.setAttribute("pos-y", row);

              rowDiv.appendChild(columnDiv);
          }
          containerDiv.appendChild(rowDiv);
      }
      return containerDiv;
  },

  addEventListenersToPixelDivs() {
      const pixelDivs = document.getElementsByClassName("pixel-div");
      for (i = 0; i < pixelDivs.length; i++) {
          pixelDivs[i].addEventListener("click", function () {
              const x = this.getAttribute("pos-x");
              const y = this.getAttribute("pos-y");
              editSinglePixelInGrid(x,y)
          });
      }
  },

  editSinglePixelInGrid(x,y) {
      grid[x][y] = "#asdwex"
  }

};