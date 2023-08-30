import React from "react";

export default function reset({ setPay, setService1, setService2 }) {
  const handleReset = () => {
    setPay("");
    setService1(0);
    setService2(0);
  };
  return <button onClick={handleReset}>reset</button>;
}
