import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./components/Themeprovider";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
