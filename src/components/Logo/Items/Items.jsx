const Items = ({ itemObj, onDeleteItem }) => {
  return (
    <div>
      <li className="px-7 pt-4">
        <input className="mx-1" type="checkbox" />
        <span className={`text-white ${itemObj.packed ? "line-through" : ""}`}>
          {itemObj.quantity} {itemObj.description}
        </span>
        <button onClick={() => onDeleteItem(itemObj.id)} className="mx-2">
          ❌
        </button>
      </li>
    </div>
  );
};

export default Items;
