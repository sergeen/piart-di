import { Component } from "solid-js";
// import ui from "./components/ui";
import TheStage from "./components/TheStage";
import './App.scss'
import { MyProvider, useMyContext } from "./state/context";
import Button from "./components/Button";

const App: Component = () => {

  return (
      <MyProvider>
          <Button />
          <TheStage />
      </MyProvider>
  );
};

export default App;