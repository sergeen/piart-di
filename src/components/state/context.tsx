
import { createContext, createSignal, useContext } from 'solid-js';

const initialState = {
  currentColor: "a",
  currentSize: 16,
};

const MyContext = createContext(initialState);

export function MyProvider(props) {

const [name, setName] = createSignal(props.name || '');

 return (
    <MyContext.Provider value={[name, setName]}>
      {props.children}
    </MyContext.Provider>
  );
 
 }
 
 export function useMyContext() { return useContext(MyContext); }