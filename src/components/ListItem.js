const ListItem = (item) => {
  console.log(item);
  return (
    <div id={item.item.name}>
      <div>{item.item.name}</div>
      <div>{item.item.gender}</div>
      <div>{item.item.hair_color}</div>
      <div>{item.item.mass}</div>
      <div>{item.item.height}</div>
    </div>
  );
};

export default ListItem;