import "./styles.css";

import { useContext, useState } from "react";

import { CustomPinsContext } from "../provider/CustomPinsProvider";
import Marker from "../../icons/Marker";

const CustomPin = ({ top, left, maxHeight, maxWidth, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentWidth] = useContext(CustomPinsContext);

  return (
    <div
      className="customPin"
      style={{
        top:
          currentWidth && currentWidth !== maxWidth
            ? `calc(${top}% - (${maxWidth - currentWidth}px))`
            : top,
        left: left,
      }}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      <Marker />
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
};

export default CustomPin;
