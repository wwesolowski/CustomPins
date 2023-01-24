import "./styles.css";

const CustomPins = ({ img, children }) => {
    
  return (
    <div className="customPins">
      <div className="imgSection">
        <img src={img} alt="" />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default CustomPins;
