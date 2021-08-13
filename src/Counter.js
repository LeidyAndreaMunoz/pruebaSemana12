import { useState } from "react";

export const Counter = () => {
  const [plus, setPlus] = useState(5)
    return (
      <>
      <button onClick={()=> setPlus(plus + 1)}>+</button>
      <br />
      <h4>El resultado es: {plus}</h4>
      <br />
      <button onClick={()=> setPlus(plus - 1)}>-</button>
      <br />
      <button onClick={()=> setPlus(5)}>Reset</button>
      </>
    );  
  };