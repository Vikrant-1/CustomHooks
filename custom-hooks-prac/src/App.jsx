import useIsOnline from "./hooks/useIsOnline";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, loading } = useTodos();
  const isOnline = useIsOnline();

  if (!isOnline) {
    return <div>Your are {isOnline ? "Online" : "Offline"}</div>;
  }

  if (loading) return <div>loading ....</div>;

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
