import "./ListItem.css";

const ListItem = ({ item }) => {
  return (
    <li className="itemContainer">
      <p>{item.name}</p>
      <p>Gender: {item.gender}</p>
      <p>Hair color: {item.hair_color}</p>
      <p>Height: {item.height}</p>
      <p>Mass: {item.mass}</p>
    </li>
  );
};

export default ListItem;
