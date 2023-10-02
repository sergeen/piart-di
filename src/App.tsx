import { Component } from "solid-js";
// import ui from "./components/ui";
import { createMatrix, createDivGrid, attachDivGrid } from "./components/svgDrawer";

const rootDiv = document.getElementById("root");

/* 1 Color de la interfaz */
// ui();

/* TODO:
  creo que el problema es el contexto en el que se agregan los event listeners
  si el document.addEventLister lo hago acá seguro tengo acceso a la informacion
  que necesito
*/

const svgDrawerMatrix = createMatrix(10, 10);
const svgDrawerDivGrid = createDivGrid(svgDrawerMatrix);
const svgDrawersCellDivs = attachDivGrid(rootDiv, svgDrawerDivGrid);

// for (let i = 0; i < svgDrawersCellDivs.length; i++) {
//   svgDrawersCellDivs[i].addEventListener("click", (e) =>
//       svgDrawer.editCellDiv(
//           svgDrawerMatrix,
//           e.target.attributes.xpos.value,
//           e.target.attributes.ypos.value,
//           1
//       )
//   );
// }

const App: Component = () => {
  return (
    <div>
      hola!
    </div>
  );
};

export default App;