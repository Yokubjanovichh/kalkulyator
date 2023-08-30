import React from "react";

export default function price({ setPay, pay }) {
  return (
    <div>
      <label htmlFor="pay">How much was the bill </label>
      <input value={pay} id="pay" type="text" onChange={(e) => setPay(Number(e.target.value))} />
    </div>
  );
}
