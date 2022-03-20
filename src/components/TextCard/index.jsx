import "./style.css";
import Svg from "../../assets/images/pattern-divider-desktop.svg";

const TextCard = ({ id, frase }) => {
  return (
    <>
      <div className="text-card">
        <div className="box-text">
          <span className="titulo">{id ? `ADVICE #${id}` : "Loading..."}</span>
          <p className="frase">{frase ? `"${frase}"` : "Loading..."}</p>
        </div>
        <div className="separator">
          <img src={Svg} alt={Svg} />
        </div>
      </div>
    </>
  );
};

export default TextCard;
