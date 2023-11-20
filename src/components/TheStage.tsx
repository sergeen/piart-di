import { Component, createEffect, createSignal, For, onMount } from "solid-js";
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

const getLocalStoredDrawings = () => {
  return JSON.parse(localStorage.getItem('svgDrawerStoredDrawings'))
}

export const initialState = {
  currentColor: "transparent",
  currentPalette: [
    {
      name: "PAPERBACK-2",
      url: "https://lospec.com/palette-list/paperback-2",
      author: "Dophid",
      colors: ["#b8c2b9", "#382b26", "transparent"],
    },
  ],
  localStoredDrawings: getLocalStoredDrawings(),
  currentMatrix: createMatrix(16),
  currentTitle: "Untitled",
  currentDrawing: {
    title: "",
    date: null,
    matrix: []
  }
};

const TheStage: Component<matrix> = () => {

  const [currentMatrix, setCurrentMatrix] = createSignal(initialState.currentMatrix);
  const [currentColor, setCurrentColor] = createSignal(initialState.currentColor);
  const [currentPalette, setCurrentPalette] = createSignal(initialState.currentPalette[0].colors);
  const [currentTitle, setCurrentTitle] = createSignal(initialState.currentTitle)
  const [currentDrawing, setCurrentDrawing] = createSignal(initialState.currentDrawing)
  const [currentLocalStore, setCurrentLocalStore] = createSignal(initialState.localStoredDrawings)

  const editSingleCell = (coordString: string) => {
    const coordinates = coordStringToCoordObj(coordString);
    const newMatrix = currentMatrix();
    newMatrix[coordinates.x][coordinates.y] = currentColor();
    setCurrentMatrix([...newMatrix]);
  };

  const handleNewDrawingSave = (object, array) => {
    const index = array.findIndex((obj) => obj.title === object.title);
    if (index !== -1) {
      array[index] = currentDrawing();
    } else {
      array.push(currentDrawing());
    }
    return array
  };

  createEffect(() => {

    // When any of this values are updated
    currentTitle();
    currentColor();
    currentMatrix();
    currentPalette();

    // Set the current Drawing
    setCurrentDrawing({
      title: currentTitle(),
      date: new Date(),
      matrix: currentMatrix(),
    })

    return () => {
      console.log("cleanup");
    }

  })

  const handleSaveToLocalStorage = () => {
    if (currentLocalStore() === null ) {
      localStorage.setItem("svgDrawerStoredDrawings", JSON.stringify([currentDrawing()]))
    } else {
      localStorage.setItem("svgDrawerStoredDrawings", JSON.stringify(handleNewDrawingSave(
        currentDrawing(), 
        currentLocalStore()
      )))
    }
    setCurrentLocalStore(getLocalStoredDrawings());
  };

  return (
    <>
      <div class="list-stored">
        <select onchange={e => {
          const selectedDrawing = currentLocalStore().find((drawing) => drawing.title === e.target.value)
          setCurrentMatrix(selectedDrawing.matrix)
          setCurrentTitle(selectedDrawing.title)
        }}>
        <For each={currentLocalStore()}>
          {(drawing) => (
            <option>
              {drawing.title}
            </option>
          )}
        </For>
        </select>
      </div>
      
      <div class="action-bar">
        <input
          type="text"
          onchange={(e) => setCurrentTitle(e.target.value)}
          value={currentTitle()}
          class="title-input"
        />
        <button onclick={(e) => handleSaveToLocalStorage()}>
          {TextContent.saveButton}
        </button>
      </div>

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
        {currentMatrix().map((elementX, xIndex) => (
          <div class="rowDiv">
            {elementX.map((elementX, yIndex) => (
              <div
                style={{ "background-color": currentMatrix()[xIndex][yIndex] }}
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
