import React, { useEffect, useState } from "react";

const defaultState = {
  dark: false,
  toggleDark: () => {},
};

const ThemeContext = React.createContext(defaultState);

///////////////////////////////////////////////////////////////////////////////////////
/* Getting dark mode information from OS!
You need macOS Mojave + Safari Technology Preview Release 68 to test this currently. */
///////////////////////////////////////////////////////////////////////////////////////
/* const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true; */
///////////////////////////////////////////////////////////////////////////////////////

export const ThemeProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);
  const toggleDark = () => {
    console.log("dark toggle clicked");
    let dark = !state.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setState({ ...state, dark });
  };

  useEffect(() => {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem("dark"));
    if (lsDark) {
      setState((preState) => ({ ...preState, dark: lsDark }));
    }
  }, []);

  const { dark } = state;
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
