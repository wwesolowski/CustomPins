import "./App.css";

import CustomPin from "./customPins/item/CustomPin";
import CustomPins from "./customPins/CustomPins";

function App() {
  return (
    <div className="App">
      <CustomPins img="https://img.freepik.com/premium-vector/abstract-city-map-with-pins-navigation-app_95169-1513.jpg?w=2000">
        <CustomPin top={300} left={400}>
          <div style={{width: "10vw"}}>
            <span>Witam nowych</span>
        
            <img
              src="https://www.wyborkierowcow.pl/wp-content/uploads/2021/11/rimac-nevera-najszybsze-auto-na-swiecie-1.jpg"
              alt=""
            />
           
            
          </div>
        </CustomPin>
        <CustomPin top={500} left={700}>
          <div style={{width: "10vw"}}>
            <span>Witam nowych</span>
           
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
