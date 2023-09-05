// import initialItems from "../../../initialItems";
import Items from "../Items/Items";

const PackingList = ({ items, onDeleteItem, onToggleItem, setItems }) => {
  const clearAllItems = () => {
    setItems([]);
  };

  return (
    <div className="bg-amber-950 h-96 flex flex-col justify-between">
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <Items
            itemObj={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <form className="flex justify-center pb-2">
        <select className="mx-1 md:py-1 lg:mx-2 w-48 md:w-52 cursor-pointer rounded-full text-sm bg-orange-200 placeholder:text-black text-center">
          <option>SORT BY INPUT ORDER</option>
          <option>SORT BY INPUT ORDER</option>
          <option>SORT BY INPUT ORDER</option>
        </select>
        <button
          onClick={clearAllItems}
          className="mx-1 lg:mx-1 w-24 md:w-32 rounded-full bg-orange-200 text-sm px-1 hover:bg-orange-500 hover:text-white"
        >
          CLEAR LIST
        </button>
      </form>
    </div>
  );
};

export default PackingList;
