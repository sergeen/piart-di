import { Component } from "solid-js";
import './CreateDivGrid.scss';

interface matrix {
  matrix  : number[][]
}

/** Crea una representación para colocar en el DOM.
 * Se le pasa una matriz bidimencional y a partir de eso representa
 * una estructura de DIVs que equivale a esa matriz.
 * Retorna un nodo
 */
const CreateDivGrid : Component<matrix> = ({ matrix }) => {
  return (
      <div class="gridDiv">
          {matrix.map((yElements) => (
              <div class="rowDiv">
                  {yElements.map((xElements) => (
                      <div class="cellDiv">2</div>
                  ))}
              </div>
          ))}
      </div>
  );
}

export default CreateDivGrid;