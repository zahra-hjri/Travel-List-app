import "./Stats.css";

const Stats = ({ items }) => {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentItemPacked = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="bg-teal-600 h-18 main flex justify-center items-center">
      {percentItemPacked === 100 ? (
        <p className="text-center text-sm md:text-lg p-4 font-bold">
          You got everything! Ready to go 🚀
        </p>
      ) : (
        <p className="text-center text-xs md:text-lg p-4 font-bold">
          🧳 You have {numItems} items on your list , and you already packed
          <span className="px-1">{numPackedItems}</span>({percentItemPacked}%)
        </p>
      )}
    </footer>
  );
};

export default Stats;
