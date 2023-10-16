
import { createContext, createSignal, useContext } from 'solid-js';

const initialState = {
  currentColor: "#b8c2b9",
  currentPalette: ["#b8c2b9","#382b26"],
};

const MyContext = createContext(initialState);

export function MyProvider(props) {

 return (
    <MyContext.Provider>
      {props.children}
    </MyContext.Provider>
  );
 
 }
 
 export function useMyContext() { return useContext(MyContext); }