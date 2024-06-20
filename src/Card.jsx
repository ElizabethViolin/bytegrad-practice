import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  return (
    <div>
      <Title />
      <Count />
      <ResetButton />
      <ButtonContainer>
        <CountButton />
        <CountButton />
      </ButtonContainer>
    </div>
  );
}
