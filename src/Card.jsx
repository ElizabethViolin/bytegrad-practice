import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} />
        <CountButton type="plus" setCount={setCount} />
      </ButtonContainer>
    </div>
  );
}
