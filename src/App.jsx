import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router";
import { ThemeProvider } from "./components/Themeprovider";
import UseState from "./pages/hooks/UseState";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hooks/usestate" element={<UseState />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
