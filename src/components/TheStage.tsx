import { Component, createSignal } from "solid-js";
import { coordStringToCoordObj ,coordObjToCoordStr, createMatrix } from './PureFunctions';
import { useMyContext } from "../state/context";
import './TheStage.scss';

const {
    currentColor,
} = useMyContext();

// TypeScript
interface matrix {
  matrix: string[][];
}

declare module "solid-js" {
  namespace JSX {
    interface HTMLAttributes<T> {
      coordinate?: string;
    }
  }
}

/**
 * TODO: la forma en que está hecho el componente implica que si las dimensiones
 * de la matriz cambia, se va a romper el dibujo.
 */
const TheStage: Component<matrix> = () => {

  const matrix = createMatrix(16)

  const [localMatrix, setLocalMatrix] = createSignal(matrix);

  const editSingleCell = (
    coordString: string,
  ) => {
    const coordinates = coordStringToCoordObj(coordString);
    const newMatrix = localMatrix();
    newMatrix[coordinates.x][coordinates.y] = currentColor;
    setLocalMatrix([...newMatrix]);
  };

  return (
    <div class="gridDiv">
      {matrix.map((elementX, xIndex) => (
        <div class="rowDiv">
          {elementX.map((elementX, yIndex) => (
            <div
              class={`cellDiv ${localMatrix()[xIndex][yIndex]}`}
              data-coord-string={coordObjToCoordStr({x : xIndex, y : yIndex})}
              onclick={(e) =>
                editSingleCell( e.target.getAttribute("data-coord-string") as unknown as string )
              }
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TheStage;
