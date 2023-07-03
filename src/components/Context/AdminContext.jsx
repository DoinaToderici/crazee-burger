import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  return (
    <AdminContext.Provider value={{ isModeAdmin, setIsModeAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
