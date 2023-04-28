// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { Button } from 'mui'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const names = ["Elif", "Murat", "Mert", "Hako"];

  return (
    <>
      <div>
        {names.map((name, index) => {
          return (
            <>
              <h2 key={name}>{index}</h2>
              <button key={name}>{name}</button>
            </>
          );
        })}

        {}
      </div>
    </>
  );
}

export default App;
