import "./Items.css";

const Items = ({ itemObj, onDeleteItem, onToggleItem }) => {
  return (
    <div>
      <li className=" pt-4 flex">
        <input
          className="mx-1"
          type="checkbox"
          value={itemObj.packed}
          onChange={() => onToggleItem(itemObj.id)}
        />
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
