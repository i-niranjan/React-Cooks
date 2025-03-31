import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ConfettiButton } from "@/components/magicui/confetti";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>React Cooks</h2>
    </>
  );
}

export default App;
