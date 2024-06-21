export default function Stats({ stats }) {
  return (
    <div className="stats">
      <div className="stat">
        <h2 className="stat__number">{stats.numberOfWords}</h2>
        <span className="second-heading">Words</span>
      </div>
      <div className="stat">
        <h2 className="stat__number">{stats.numberOfCharacters}</h2>
        <span className="second-heading">Characters</span>
      </div>
      <div className="stat">
        <h2 className="stat__number">{stats.instagramCharactersLeft}</h2>
        <span className="second-heading">Instagram</span>
      </div>
      <div className="stat">
        <h2 className="stat__number">{stats.facebookCharactersLeft}</h2>
        <span className="second-heading">Facebook</span>
      </div>
    </div>
  );
}
