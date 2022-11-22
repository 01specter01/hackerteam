import { createContext, useState } from "react";
const Context = createContext();
export default function MyContext({ children }) {
  const user = useState(" ");

  return <Context.Provider value={user}>{children}</Context.Provider>;
}
