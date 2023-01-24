import "./App.css";

import CustomPin from "./customPins/item/CustomPin";
import CustomPins from "./customPins/CustomPins";

function App() {
  return (
    <div className="App">
      <CustomPins img="https://www.panstwaswiata.pl/mapy/mapa_bialegostoku.jpg">
        <CustomPin top={300} left={500}>
          <div style={{width: "10vw"}}>
            <span>Auto 1</span>
        
            <img
              src="https://www.wyborkierowcow.pl/wp-content/uploads/2021/11/rimac-nevera-najszybsze-auto-na-swiecie-1.jpg"
              alt=""
            />
           
            
          </div>
        </CustomPin>
        <CustomPin top={500} left={700}>
          <div style={{width: "10vw"}}>
            <span>Auto 2</span>
           
            <img
              src="https://beesafe.pl/porady/wp-content/uploads/2022/09/najszybsze-auto-na-swiecie.jpg"
              alt=""
            />
            
          </div>
        </CustomPin>
      </CustomPins>
    </div>
  );
}

export default App;
