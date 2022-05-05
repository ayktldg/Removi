import { createContext, useState } from "react";

const ToggleMenuContext = createContext();

export const ToggleMenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onclickToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ToggleMenuContext.Provider
      value={{
        isMenuOpen,
        onclickToggleMenu,
      }}
    >
      {children}
    </ToggleMenuContext.Provider>
  );
};

export default ToggleMenuContext;
