import React from "react";

const STORAGE_KEY = "task-manager-v1";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  // Load từ localStorage trong storage chung
  const loadTheme = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return "light";

      const parsed = JSON.parse(raw);

      return parsed.theme ?? "light";
    } catch {
      return "light";
    }
  };

  const [theme, setTheme] = React.useState<Theme>(loadTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Lưu theme vào storage chung
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};

      const newState = { ...parsed, theme };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch (err) {
      console.error("Failed to save theme:", err);
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTodoContext must be used inside TodoContextProvider");
  return ctx;
};
