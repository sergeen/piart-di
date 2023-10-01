import ui from "./components/ui";
import { svgDrawer } from "./components/svgDrawer";

const rootDiv = document.getElementById("root");

/* 1 Color de la interfaz */
ui();

/* TODO: 
  creo que el problema es el contexto en el que se agregan los event listeners
  si el document.addEventLister lo hago acá seguro tengo acceso a la informacion
  que necesito
*/

const svgDrawerMatrix = svgDrawer.createMatrix(10, 10);

const svgDrawerDivGrid = svgDrawer.createDivGrid(svgDrawerMatrix);

const svgDrawersCellDivs = svgDrawer.attachDivGrid(rootDiv, svgDrawerDivGrid);

for (i = 0; i < svgDrawersCellDivs.length; i++) {
  svgDrawersCellDivs[i].addEventListener("click", (e) =>
      svgDrawer.editCellDiv(
          svgDrawerMatrix,
          e.target.attributes.xpos.value,
          e.target.attributes.ypos.value,
          1
      )
  );
}

/*
TODO : corregir el error que hace que pox-x y pos-y esten mal.
Estan saliendo en la columna.
*/
