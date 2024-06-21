export default function Textarea({ setText }) {
  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  return (
    <textarea
      className="textarea"
      onChange={handleChange}
      placeholder="Enter your text"
    ></textarea>
  );
}
