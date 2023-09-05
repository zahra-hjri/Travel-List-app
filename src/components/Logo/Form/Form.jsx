import { useState } from "react";

const Form = ({ items, setItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddItem = (itemParams) => {
    setItems([...items, itemParams]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    setDescription("");
    setQuantity(1);

    handleAddItem(newItem);
    console.log(items);
  };

  return (
    <div className="bg-orange-600 h-28 md:h-24 w-full flex flex-col md:flex-row items-center justify-center py-5">
      <p className="font-bold text-sm md:text-xl px-3 pt-3 md:pt-1">
        What do you need for your 😎 trip ?
      </p>
      <form className="py-3" onSubmit={handleSubmit}>
        <select
          placeholder="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mx-1 lg:mx-2 w-16 md:w-16 lg:w-24 rounded-full cursor-pointer  xs:py-1 bg-orange-200 placeholder:text-black text-center"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item ..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mx-1 lg:mx-1 w-36 rounded-full xs:py-1 bg-orange-200 placeholder:text-gray-600 px-4"
        ></input>
        <button className="mx-1 lg:mx-2 w-16 lg:w-24 rounded-full xs:py-1 bg-teal-500 placeholder:text-black font-bold text-center hover:bg-teal-700 hover:text-white">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Form;
