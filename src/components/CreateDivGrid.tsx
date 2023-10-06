import { Component, createEffect, createSignal } from "solid-js";
import './CreateDivGrid.scss';

// TypeScript
interface matrix {
  matrix: boolean[][];
}

declare module "solid-js" {
  namespace JSX {
    interface HTMLAttributes<T> {
      posx?: number;
      posy?: number;
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
    posx: number,
    posy: number,
    value: boolean
  ) => {
    const newMatrix = localMatrix();
    newMatrix[posx][posy] = !newMatrix[posx][posy];
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
      {matrix.map((elementX, xIndex) => (
        <div class="rowDiv">
          {elementX.map((elementX, yIndex) => (
            <div
              class={`cellDiv ${localMatrix()[xIndex][yIndex] ? 'inactive' : 'active'}`}
              posx={xIndex}
              posy={yIndex}
              onclick={(e) =>
                editSingleCell(
                  // TODO: toda esta lógica se puede mover a la declaracion de editSingleCell
                  e.target.getAttribute("posx") as unknown as number,
                  e.target.getAttribute("posy") as unknown as number,
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
