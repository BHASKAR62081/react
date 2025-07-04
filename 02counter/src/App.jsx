import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    console.log("Clicked:", counter);

    //counter += 1;

    // if (counter < 20) {
    //   setCounter(counter + 1);
    // } else {
    //   console.log("Max limit reached (20)");
    // }

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    console.log("Clicked:", counter);

    //counter -= 1;
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Min limit reached (0)");
    }
  };

  return (
    <>
      <h1>React!!</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <br />
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
