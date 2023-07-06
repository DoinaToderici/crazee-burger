import { createContext, useState } from "react";
import { fakeMenu } from "../../fakeData";

export const AdminContext = createContext();
const IMG_BY_DEFAULT = "/images/coming-soon.png";

export const AdminContextProvider = ({ children }) => {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState(false);
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleAdd = (newProduct) => {
    const copyMenu = [...menu];
    const menuUpdated = [newProduct, ...copyMenu];
    setMenu(menuUpdated);
  };

  const propsAdminContext = {
    isModeAdmin,
    setIsModeAdmin,
    collapsed,
    setCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    IMG_BY_DEFAULT,
  };

  return (
    <AdminContext.Provider value={propsAdminContext}>
      {children}
    </AdminContext.Provider>
  );
};
