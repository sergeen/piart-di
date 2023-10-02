import { Component } from "solid-js";
// import ui from "./components/ui";
import CreateMatrix from "./components/CreateMatrix";
import CreateDivGrid from "./components/CreateDivGrid";
import './style.scss'

const svgDrawerMatrix = CreateMatrix(10, 10);
// const svgDrawerDivGrid = createDivGrid(svgDrawerMatrix);
// const svgDrawersCellDivs = attachDivGrid(rootDiv, svgDrawerDivGrid);

// for (let i = 0; i < svgDrawersCellDivs.length; i++) {
//   svgDrawersCellDivs[i].addEventListener("click", (e) =>
//       svgDrawer.editCellDiv(
//           svgDrawerMatrix,
//           e.target.attributes.xpos.value,
//           e.target.attributes.ypos.value,
//           1
//       )
//   );
// }

const App: Component = () => {
  return <CreateDivGrid matrix={svgDrawerMatrix} />;
};

export default App;