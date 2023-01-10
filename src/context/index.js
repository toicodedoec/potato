import { createContext, useState } from "react";

export const Message_data = createContext(null);

function Context({ children }) {
  const [message, setMessage] = useState("");
  const test = 42;

  return (
    <Message_data.Provider value={{ message, setMessage, test }}>
      {children}
    </Message_data.Provider>
  );
}

export default Context;
