import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import ThemeProvider from "./ThemeProvider";
const ThemedComponent = () => {
    const { theme,toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button onClick={toggleTheme}>Change theme</button>
            <h1>{theme}</h1>
        </div>
    );
};
export default ThemedComponent;