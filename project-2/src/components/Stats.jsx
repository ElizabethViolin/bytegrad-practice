export default function Stats({ stats }) {
  return (
    <div className="stats">
      <Stat number={stats.numberOfWords} description={"Words"} />
      <Stat number={stats.numberOfCharacters} description={"Characters"} />
      <Stat number={stats.instagramCharactersLeft} description={"Instagram"} />
      <Stat number={stats.facebookCharactersLeft} description={"Facebook"} />
    </div>
  );
}

function Stat({ number, description }) {
  return (
    <div className="stat">
      <h2 className="stat__number">{number}</h2>
      <span className="second-heading">{description}</span>
    </div>
  );
}
