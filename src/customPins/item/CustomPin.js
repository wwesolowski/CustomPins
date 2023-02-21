import "./styles.css";

import { useContext, useEffect, useState } from "react";

import { CustomPinsContext } from "../provider/CustomPinsProvider";
import LooksTwo from "../../icons/LooksTwo";

const CustomPin = ({ top, left, maxHeight, maxWidth, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentWidth } = useContext(CustomPinsContext);
  const [scale, setScale] = useState(1)

  useEffect(() => {
    setScale((currentWidth / maxWidth))
  }, [currentWidth, maxWidth, setScale])

  return (
    <div
      className="customPin"
      style={{
        top: `calc(${top * scale}px`,
        left: `calc(${left * scale}px`,
        display: "block"
      }}
      onMouseOver={() => setIsOpen(true)}
      onMouseOut={() => setIsOpen(false)}
    >
      <LooksTwo width={scale * 48} height={scale * 48} />
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
};

export default CustomPin;
