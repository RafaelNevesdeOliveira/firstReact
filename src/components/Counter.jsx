import { useState } from "react";

export function Counter() {

  let [counter, setCounter] = useState(0);
  

  function increment(){
    setCounter(counter +1)
  }
    
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment} type="button">Incrementar</button>
    </div>
  );
}
