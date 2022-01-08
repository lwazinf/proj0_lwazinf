import { createContext, useState } from "react";

export const AppContext = createContext({}); 

export function ContextWrapper(props) {
    const [x, setX] = useState([]);
    
    return (
      <AppContext.Provider value={{ x, setX }}>
        {props.children}
      </AppContext.Provider>
    );
  }