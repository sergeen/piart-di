
import { createContext, useContext } from 'solid-js';
import { initialState } from '../config/config';

const MyContext = createContext(initialState);

export function MyProvider(props) {

 return (
    <MyContext.Provider>
      {props.children}
    </MyContext.Provider>
  );
 
}
 
export function useMyContext() { 
  return useContext(MyContext)
}