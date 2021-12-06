import "./List.css";
import ListItem from "./ListItem";

const sortAlphabetically = (a, b) => a.name.localeCompare(b.name);

const List = ({ data }) => {
  const list = data.results.sort(sortAlphabetically).map((item, i) => {
    return <ListItem key={i} item={item} />;
  });

  return <ul className="list">{list}</ul>;
};

export default List;
