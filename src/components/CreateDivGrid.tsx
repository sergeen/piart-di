import { Component, createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { idToCoordinate ,coordinateToId } from './commons';
import './CreateDivGrid.scss';
import { useMyContext } from "./state/context";

const {
    name,
} = useMyContext();

// TypeScript
interface matrix {
  matrix: boolean[][];
}

declare module "solid-js" {
  namespace JSX {
    interface HTMLAttributes<T> {
      coordinate?: string;
    }
  }
}

/** Crea una representación para colocar en el DOM.
 * Se le pasa una matriz bidimensional y a partir de eso representa
 * una estructura de DIVs que equivale a esa matriz.
 * Retorna un nodo
 */
const CreateDivGrid: Component<matrix> = ({ matrix }) => {

  const [localMatrix, setLocalMatrix] = createSignal(matrix);

  const editSingleCell = (
    id: string,
    value: boolean
  ) => {
    const coordinate = idToCoordinate(id);
    const newMatrix = localMatrix();
    newMatrix[coordinate.x][coordinate.y] = !newMatrix[coordinate.x][coordinate.y];
    setLocalMatrix([...newMatrix]);
  };

  createEffect(() => {
    storeDrawing(localMatrix())
  })

  const storeDrawing = ( matrix : boolean[][] ) => {
    const matrixString = JSON.stringify(matrix);
    localStorage.setItem('svg-drawer-current', matrixString);
  }

  return (
    <div class="gridDiv">
      {name}
      {matrix.map((elementX, xIndex) => (
        <div class="rowDiv">
          {elementX.map((elementX, yIndex) => (
            <div
              class={`cellDiv ${localMatrix()[xIndex][yIndex] ? 'inactive' : 'active'}`}
              coordinate={coordinateToId({x : xIndex, y : yIndex})}
              onclick={(e) =>
                editSingleCell(
                  // TODO: toda esta lógica se puede mover a la declaracion de editSingleCell
                  e.target.getAttribute("coordinate") as unknown as string,
                  true
                )
              }
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CreateDivGrid;
