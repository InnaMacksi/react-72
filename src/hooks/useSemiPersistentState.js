import { useState, useEffect } from "react";

export default function useSemiPersistentState(key, defaultValue) {
 const [state, setState] = useState(localStorage.getItem(key) || defaultValue);

 useEffect(() => {
  localStorage.setItem(key, state);
 }, [state]);

 return [state, setState];
}