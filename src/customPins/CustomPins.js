import "./styles.css";

const CustomPins = ({ img, children }) => {
    
  return (
    <div className="customPins">
      <img src={img} alt="" />
      <div>
        {children}
      </div>
    </div>
  );
};

export default CustomPins;
