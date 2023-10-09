import { Component } from "solid-js";
// import ui from "./components/ui";
import CreateMatrix from "./components/CreateMatrix";
import CreateDivGrid from "./components/CreateDivGrid";
import './App.scss'


const App: Component = () => {
  return(
  <CreateDivGrid matrix={
    !localStorage.getItem("svg-drawer-current")
    ? CreateMatrix(16)
    : JSON.parse( localStorage.getItem("svg-drawer-current") )
  }/>
  )
};

export default App;