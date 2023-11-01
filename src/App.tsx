import { Component } from "solid-js";
// import ui from "./components/ui";
import TheStage from "./components/TheStage";
import './App.scss'
import { MyProvider } from "./context/context";
import ColorSelector from "./components/ColorSelector";

const App: Component = () => {

  return (
      <MyProvider>
          <ColorSelector />
          <TheStage />
      </MyProvider>
  );
};

export default App;