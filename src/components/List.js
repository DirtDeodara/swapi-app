import ListItem from "./ListItem";

const List = (data) => {
  return data.data.results.map((item) => {
    return <ListItem item={item} />;
  });
};

export default List;