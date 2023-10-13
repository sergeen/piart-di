import { Component } from "solid-js";
// import ui from "./components/ui";
import CreateMatrix from "./components/CreateMatrix";
import CreateDivGrid from "./components/CreateDivGrid";
import './App.scss'
import { MyProvider, useMyContext } from "./components/state/context";
import Button from "./components/Button";

const {name, setName} = useMyContext();

const App: Component = () => {

  return (
      <MyProvider>
          <Button></Button>
          <CreateDivGrid
              matrix={
                  !localStorage.getItem("svg-drawer-current")
                      ? CreateMatrix(16)
                      : JSON.parse(localStorage.getItem("svg-drawer-current"))
              }
          />
      </MyProvider>
  );
};

export default App;