import React from "react";

export default function service({ text, service, setService }) {
  return (
    <div>
      <label htmlFor={setService}>{text}</label>
      <select id={setService} value={service} onChange={(e) => setService(Number(e.target.value))}>
        <option value="0">Dessatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutly amazing (20%)</option>
      </select>
    </div>
  );
}
