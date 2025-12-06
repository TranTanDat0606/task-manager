import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeContextProvider } from "./contexts/theme/ThemeContext.tsx";
import { TaskContextProvider } from "./contexts/task/TaskContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
