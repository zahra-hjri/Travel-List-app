const Items = ({ itemObj }) => {
  return (
    <div>
      <li className="px-7 pt-4">
        <span className={`text-white ${itemObj.packed ? "line-through" : ""}`}>
          {itemObj.quantity} {itemObj.description}
        </span>
        <button className="mx-2">❌</button>
      </li>
    </div>
  );
};

export default Items;
