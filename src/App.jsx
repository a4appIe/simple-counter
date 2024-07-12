import { useState } from "react";
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
              ? setCount((prev)=>(prev-1))
              : "";
          }}
        >
          -
        </button>
        <div className="text-3xl "> {count} </div>
        <button
          onClick={() => {
            setCount((prev)=>(prev+1));
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
