import  React  from  "react";
import { useState } from "react";
import { createContext } from "react";
// Context has been created
const ThemeContext = createContext(false);
// Provider
const ThemeProvider = ({ children }) => {
    
    const  [toggle, setToggle]  =useState(false);
    const [mode, setMode] = useState('Night')
    const[style,setStyle] =useState()
    const toggleFunction =  ()  =>  {
        setToggle(!toggle);
        if (toggle === true) {
            setMode('Night')
            setStyle({})
           
        }
        else if (toggle ===false) {
            setMode('Day')
            setStyle({'backgroundColor':'black','color':'white'})
    }    
};
return  (
    <ThemeContext.Provider value={{ toggle, toggleFunction,mode,style }}>
        {children}
    </ThemeContext.Provider>
    );
};
export  {  ThemeContext,  ThemeProvider  };