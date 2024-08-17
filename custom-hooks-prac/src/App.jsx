import useTodos from "./hooks/useTodos";

function App() {
  const todos = useTodos();

  return (
    <>
      {todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </>
  );
}

function Track({ todo }) {
  return (
    <div key={todo?.id}>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
