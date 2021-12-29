import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button type='button' onClick={() => setCount((prev) => prev + 1)}>
      {count}
    </button>
  );
}

export default Counter;
