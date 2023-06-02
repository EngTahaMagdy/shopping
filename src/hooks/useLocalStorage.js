import { useEffect, useState } from "react";

export function useLocalStorage(key) {
    const jsonValue = localStorage.getItem(key);
  const [value, _] = useState(jsonValue?JSON.parse(jsonValue):[]);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  console.log("value",value);
  return [value];
}
