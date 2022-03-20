import imgBtn from "../../assets/images/icon-dice.svg";
import "./style.css";

const ButtonRandom = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <img src={imgBtn} alt={imgBtn} />
    </button>
  );
};

export default ButtonRandom;
