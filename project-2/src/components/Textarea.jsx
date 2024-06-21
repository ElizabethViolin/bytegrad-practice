import Warning from "./Warning";
import { useState } from "react";

export default function Textarea({ text, setText }) {
  const [warningMessage, setWarningMessage] = useState("");

  const handleChange = (e) => {
    let text = e.target.value;

    if (text.includes("<script>")) {
      setWarningMessage("You cannot use <script> tag.");
      text = text.replace("<script>", "");
    } else if (text.includes("@")) {
      setWarningMessage("You cannot use @ symbol.");
      text = text.replace("@", "");
    } else {
      setWarningMessage("");
    }

    setText(text);
  };

  return (
    <>
      <textarea
        value={text}
        className="textarea"
        onChange={handleChange}
        placeholder="Enter your text"
      />
      {warningMessage ? <Warning warningMessage={warningMessage} /> : null}
    </>
  );
}
