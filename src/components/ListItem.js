import "./ListItem.css";

const ListItem = (item) => {
  return (
    <li className="itemContainer">
      <p>Name: {item.item.name}</p>
      <p>Gender: {item.item.gender}</p>
      <p>Hair color: {item.item.hair_color}</p>
      <p>Height: {item.item.height}</p>
      <p>Mass: {item.item.mass}</p>
    </li>
  );
};

export default ListItem;
