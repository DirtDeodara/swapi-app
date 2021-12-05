import "./List.css";
import ListItem from "./ListItem";

const List = (data) => {
  const list = data.data.results.map((item, i) => {
    return <ListItem id={i}  item={item} />;
  });

  return (
    <div className="listContainer">
      <ul className="list">{list}</ul>
    </div>
  );
};

export default List;
