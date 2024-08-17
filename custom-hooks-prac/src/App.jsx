import { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import useIsOnline from "./hooks/useIsOnline";
import useTodos from "./hooks/useTodos";

// function App() {
//   const { todos, loading } = useTodos();
//   const isOnline = useIsOnline();

//   if (!isOnline) {
//     return <div>Your are {isOnline ? "Online" : "Offline"}</div>;
//   }

//   if (loading) return <div>loading ....</div>;

//   return (
//     <>
//       {todos.map((todo) => (
//         <Track todo={todo} />
//       ))}
//     </>
//   );
// }

// function Track({ todo }) {
//   return (
//     <div key={todo?.id}>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }

function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <>
      <p>deb value: {debouncedValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </>
  );
}

export default App;
