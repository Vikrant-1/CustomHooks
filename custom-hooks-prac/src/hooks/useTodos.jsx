import axios from "axios";
import { useState , useEffect } from "react";

export default function () {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.domain/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  return todos ?? [];
}
