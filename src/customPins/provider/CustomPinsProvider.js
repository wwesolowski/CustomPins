import { createContext, useState } from "react";

export const CustomPinsContext = createContext();

const CustomPinsProvider = ({ children }) => {
  const [currentWidth, setCurrentWidth] = useState(undefined);
  return (
    <CustomPinsContext.Provider value={[currentWidth, setCurrentWidth]}>
      {children}
    </CustomPinsContext.Provider>
  );
};

export default CustomPinsProvider;
