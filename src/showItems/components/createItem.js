function CreateItem(item) {
  return (
    <div className="item" key={item.id}>
      <div className="item-name">{item.name}</div>
      <div className="item-price">{item.price}</div>
    </div>
  );
}

export default CreateItem;
