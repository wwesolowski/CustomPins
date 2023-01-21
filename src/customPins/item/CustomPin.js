import "./styles.css";

import Marker from "../../icons/Marker";
import { useState } from "react";

const CustomPin = ({ top, left, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="customPin"
      style={{
        top: top - 48,
        left: left - 24,
      }}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      <Marker />
      {isOpen && 
      (
        <div className="content">
            {children}
        </div>
      )}
    </div>
  );
};

export default CustomPin;
