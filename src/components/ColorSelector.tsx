
import { useMyContext } from "../state/context";
import './ColorSelector.scss';
import TextContent from "../languaje/textContent";

const { currentPalette } = useMyContext();

const ColorSelector = () => {

  return (
      <div class="color-selector">
          <p>{TextContent.colorSelectorTitle}</p>
          <div>
              {currentPalette.map((swatch) => (
                  <div
                      class="color-thumb"
                      style={
                        { "background-color": swatch }
                      }
                  ></div>
              ))}
          </div>
      </div>
  );
}

export default ColorSelector;