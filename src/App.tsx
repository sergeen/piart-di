import { Component } from "solid-js";
// import ui from "./components/ui";
import CreateMatrix from "./components/CreateMatrix";
import CreateDivGrid from "./components/CreateDivGrid";
import './App.scss'


const App: Component = () => {
  return <>
  <CreateDivGrid matrix={CreateMatrix(8, 8)} />
  </>;
};

export default App;