import { useState } from "react";
import { asia } from "../mock-data/asia";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const item = asia[index];

  return (
    <div>
      <h2>What is the capital of {item.country}?</h2>
      <img className="object-cover w-100 h-75" src={`./src/assets/images/category/asia/${item.country.toLowerCase().replace(/ /g, '-')}.jpg`}/>
      <div>
        <button className="rounded">{item.correctCapital}</button>
        <button className="rounded">{item.wrongOption}</button>
      </div>
    </div>
  );
}