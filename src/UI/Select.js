// import "./styles.css";
import { useState } from "react";
export default function App() {
  const [myValue, setMyValue] = useState("");

  return (
    <div>
      <select
        onChange={(e) => setMyValue(e.target.value)}
        defaultValue={myValue}
      >
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <h2>
        {" "}
        You selected{" "}
        <span style={{ backgroundColor: "yellow" }}>{myValue}</span>
      </h2>
    </div>
  );
}
