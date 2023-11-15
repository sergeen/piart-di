import { Component, createSignal, For } from "solid-js";
import {
  coordStringToCoordObj,
  coordObjToCoordStr,
  createMatrix,
} from "./PureFunctions";
import "./TheStage.scss";
import TextContent from "../language/TextContent";

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

export const initialState = {
  defaultColor: "transparent",
  colorPaletes: [
    {
      name: "PAPERBACK-2",
      url: "https://lospec.com/palette-list/paperback-2",
      author: "Dophid",
      colors: ["#b8c2b9", "#382b26", "transparent"],
    },
  ],
};

const TheStage: Component<matrix> = () => {
  const matrix = createMatrix(16);

  const [localMatrix, setLocalMatrix] = createSignal(matrix);
  const [currentColor, setCurrentColor] = createSignal(
    initialState.defaultColor
  );
  const [currentPalette, setCurrentPalette] = createSignal(
    initialState.colorPaletes[0].colors //TODO: como acceso a esto desde currentPalette().colors ?
  );

  const editSingleCell = (coordString: string) => {
    const coordinates = coordStringToCoordObj(coordString);
    const newMatrix = localMatrix();
    newMatrix[coordinates.x][coordinates.y] = currentColor();
    setLocalMatrix([...newMatrix]);
  };

  return (
    <>
      <div class="color-selector">
        <p>{TextContent.colorSelectorTitle}</p>
        <div class="color-samples">
          <For each={currentPalette()}>
            {(color) => (
              <div
                class={`color-thumb ${
                  currentColor() === color ? "active" : ""
                }`}
                style={{ "background-color": color }}
                onclick={() => {
                  setCurrentColor(color);
                }}
              >
                {color === "transparent" ? "✖️" : null}
              </div>
            )}
          </For>
        </div>
      </div>
      <div class="stage">
        {matrix.map((elementX, xIndex) => (
          <div class="rowDiv">
            {elementX.map((elementX, yIndex) => (
              <div
                style={{ "background-color": localMatrix()[xIndex][yIndex] }}
                class={`cellDiv`}
                data-coord-string={coordObjToCoordStr({ x: xIndex, y: yIndex })}
                onclick={(e) =>
                  editSingleCell(
                    e.target.getAttribute(
                      "data-coord-string"
                    ) as unknown as string
                  )
                }
              ></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default TheStage;
