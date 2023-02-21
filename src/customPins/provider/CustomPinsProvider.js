import { createContext, useState } from "react";

import { useMemo } from "react"

export const CustomPinsContext = createContext();

const CustomPinsProvider = ({ children }) => {
  const [currentWidth, setCurrentWidth] = useState(undefined);
  const [currentHeight, setCurrentHeight] = useState(undefined);
  return (
    <CustomPinsContext.Provider 
      value={
        useMemo(() => ({ currentWidth, setCurrentWidth, currentHeight, setCurrentHeight}), 
          [currentWidth, setCurrentWidth, currentHeight, setCurrentHeight])
        }
    >
      {children}
    </CustomPinsContext.Provider>
  );
};

export default CustomPinsProvider;
