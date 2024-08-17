import { useEffect, useState } from "react";

export default function (value, delay) {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);
  return debounceValue;
}
