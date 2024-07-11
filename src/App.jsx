import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  console.log(count);

  return (
    <>
      <div className="flex gap-5 bg-slate-800 shadow-sm shadow-gray-600 items-center px-5 py-3 rounded-md">
        <button
          onClick={() => {
            count > 0
              ? setCount(count-1)
              : "";
          }}
        >
          -
        </button>
        <div className="text-3xl "> {count} </div>
        <button
          onClick={() => {
            setCount(count+1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
