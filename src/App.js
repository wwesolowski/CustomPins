import "./App.css";

import { useEffect, useRef, useState } from "react";

import CustomPin from "./customPins/item/CustomPin";
import CustomPins from "./customPins/CustomPins";
import CustomPinsProvider from "./customPins/provider/CustomPinsProvider";

function App() {
  const [maxHeight, setMaxHeight] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);

  const imgSrc = "https://www.panstwaswiata.pl/mapy/mapa_bialegostoku.jpg";

  const onLoadImg = ({ target }) => {
    setMaxHeight(target.offsetHeight);
    setMaxWidth(target.offsetWidth);
  };

  const Img = () => (
    <img
      src={imgSrc}
      alt=""
      style={{ width: "100%", height: "auto" }}
      onLoad={onLoadImg}
    />
  );

  const ref = useRef(Img);

  useEffect(() => {
    if (ref.current) {
      console.log(`hookRef div width: ${ref.current.clientWidth}`);
    }
  }, []);

  return (
    <div className="App">
      <CustomPinsProvider>
        <CustomPins img={Img}>
          <CustomPin
            top="40%"
            left="70%"
            maxHeight={maxHeight}
            maxWidth={maxWidth}
          >
            <div style={{ width: "10vw" }}>
              <span>Auto 1</span>
              <img
                src="https://www.wyborkierowcow.pl/wp-content/uploads/2021/11/rimac-nevera-najszybsze-auto-na-swiecie-1.jpg"
                alt=""
              />
            </div>
          </CustomPin>
          <CustomPin
            top="20%"
            left="30%"
            maxHeight={maxHeight}
            maxWidth={maxWidth}
          >
            <div style={{ width: "10vw" }}>
              <span>Auto 2</span>
              <img
                src="https://beesafe.pl/porady/wp-content/uploads/2022/09/najszybsze-auto-na-swiecie.jpg"
                alt=""
              />
            </div>
          </CustomPin>
        </CustomPins>
      </CustomPinsProvider>
    </div>
  );
}

export default App;
