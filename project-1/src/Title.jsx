export default function Title({ locked }) {
  return (
    <div className="title">
      {locked ? (
        <span>
          Limit! Buy <b>Pro</b> for &gt;5
        </span>
      ) : (
        "Fancy Counter"
      )}
    </div>
  );
}
