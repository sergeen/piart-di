
import { useMyContext } from "../context/context";
import './ColorSelector.scss';
import TextContent from "../languaje/TextContent";
import { createSignal } from "solid-js";

const { currentPalette } = useMyContext();

const ColorSelector = () => {
  const [ currentColor, setCurrentColor ] = createSignal('');

  return (
      <div class="color-selector">
          <p>{TextContent.colorSelectorTitle}</p>
          <div>
              {currentPalette.map((color) => (
                  <div
                      class={`color-thumb ${ currentColor() === color ? "active" : ""}`}
                      style={
                        { "background-color": color }
                      }
                      onclick={() => {
                        setCurrentColor(color)
                      }}
                  ></div>
              ))}
          </div>
      </div>
  );
}

export default ColorSelector;