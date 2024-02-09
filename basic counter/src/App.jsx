import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 15;

  const addValue = () => {
    // counter+=1
    setCounter(counter + 1);
    // console.log("clicked", counter);
  };
  const removeValue = () => {
    setCounter(counter - 1);
    // console.log("clicked", counter);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>counter value: {counter}</h2>
      <h3>counter value: {counter}</h3>
      <h4>counter value: {counter}</h4>

      <br />
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
