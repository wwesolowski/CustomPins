import "./styles.css";

import { useContext, useEffect } from "react";

import { CustomPinsContext } from "./provider/CustomPinsProvider";
import { useMeasure } from "react-use";

const CustomPins = ({ img: Img, children }) => {
  const [, setCurrentWidth] = useContext(CustomPinsContext);

  const [ref, { width }] = useMeasure();

  useEffect(() => {
    setCurrentWidth(width);
  }, [setCurrentWidth, width]);

  return (
    <div className="customPins">
      <div ref={ref} className="imgSection">
        <Img />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CustomPins;
