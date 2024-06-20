import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount }) {
  const handleClick = () => {
    if (type === "minus") {
      setCount((prev) => prev - 1);
    } else {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <button onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
