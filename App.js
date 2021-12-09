import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#10274b";
    }
  };
  return (
    <>
      <Navbar title="Hello" theme={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textarea heading="Enter your text here" mode={mode} />
      </div>
    </>
  );
}

export default App;
