import React, { createContext, useState } from "react";
export const ContextUser = createContext();

export default function ContextUserProvider(props) {
  const [userName, setUserName] = useState();

  return (
    <ContextUser.Provider value={{ userName, setUserName }}>
      {props.children}
    </ContextUser.Provider>
  );
}
