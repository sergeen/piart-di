import ui from "./components/ui";
import { svgDrawer } from "./components/svgDrawer";

/* 1 Color de la interfaz */
ui();

const grid = svgDrawer.createMatrix("10", 10);
const divElements = svgDrawer.createGridofDivElements(grid);

document.getElementById("root").appendChild(divElements);

const editSinglePixelInGrid = svgDrawer.editSinglePixelInGrid;
svgDrawer.addEventListenersToPixelDivs();

/*
TODO : corregir el error que hace que pox-x y pos-y esten mal.
Estan saliendo en la columna.
*/
