import React from "react";

const ThemeContext = React.createContext("");

export const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  return <ThemeContext.Provider value="">{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTodoContext must be used inside TodoContextProvider");
  return ctx;
};
