// import initialItems from "../../../initialItems";
import { useState } from "react";
import Items from "../Items/Items";

const PackingList = ({ items, onDeleteItem, onToggleItem, setItems }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  const clearAllItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="bg-amber-950 h-96 flex flex-col justify-between">
      <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-5">
        {sortedItems.map((item) => (
          <Items
            itemObj={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions flex justify-center pb-2">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="mx-1 xs:py-1 md:py-1 lg:mx-2 w-48 md:w-52 cursor-pointer rounded-full text-sm bg-orange-200 placeholder:text-black text-center"
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button
          onClick={clearAllItems}
          className="mx-1 xs:py-1 lg:mx-1 w-24 md:w-32 rounded-full bg-orange-200 text-sm px-1 hover:bg-orange-500 hover:text-white"
        >
          CLEAR LIST
        </button>
      </div>
    </div>
  );
};

export default PackingList;
