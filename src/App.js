import "./App.css";

import { useRef, useState } from "react";

import CustomPin from "./customPins/item/CustomPin";
import CustomPins from "./customPins/CustomPins";
import CustomPinsProvider from "./customPins/provider/CustomPinsProvider";

function App() {
  const [maxHeight, setMaxHeight] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);

  const imgSrc = "https://www.panstwaswiata.pl/mapy/mapa_bialegostoku.jpg";

  const ref = useRef(null);

  const onLoadImg = () => {
    setMaxHeight(ref.current.naturalHeight);
    setMaxWidth(ref.current.naturalWidth);
  };

  const Img = () => (
    <img
      ref={ref}
      src={imgSrc}
      alt=""
      style={{ width: "100%", height: "auto" }}
      onLoad={onLoadImg}
    />
  );

  return (
    <div className="App">
      <CustomPinsProvider>
        <CustomPins img={Img}>
          <CustomPin
            top={150}
            left={450}
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
            top={400}
            left={700}
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
