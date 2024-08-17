import { useState } from "react";
import "./App.css";

// function componentss
function MyCompnent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
    </div>
  );
}

function App() {
  return (
    <>
      <MyCompnent />
    </>
  );
}

export default App;
