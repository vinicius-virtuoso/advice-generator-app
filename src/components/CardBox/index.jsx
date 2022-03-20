import { useState, useEffect } from "react";
import ButtonRandom from "../ButtonRandom";
import TextCard from "../TextCard";
import "./style.css";

const CardBox = () => {
  const [change, setChange] = useState(true);
  const [frase, setFrase] = useState({});

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then(({ slip }) => setFrase(slip));
  }, [change]);

  return (
    <div className="CardBox">
      <TextCard id={frase.id} frase={frase.advice} />
      <ButtonRandom onClick={() => setChange(!change)} />
    </div>
  );
};

export default CardBox;
