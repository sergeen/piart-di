import { Component } from "solid-js";
// import ui from "./components/ui";
import CreateMatrix from "./components/CreateMatrix";
import CreateDivGrid from "./components/CreateDivGrid";
import './App.scss'


const App: Component = () => {
  return <>
  <CreateDivGrid matrix={CreateMatrix(16, 16)} />
  </>;
};

export default App;