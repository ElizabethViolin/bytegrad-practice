export default function ItemList({ items }) {
  return (
    <ul className="item-list">
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input checked={item.packed} type="checkbox" />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}
