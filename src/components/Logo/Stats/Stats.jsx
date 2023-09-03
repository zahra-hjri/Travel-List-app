import "./Stats.css";

const Stats = () => {
  return (
    <footer className="bg-teal-600 main">
      <em>
        <p className="text-center text-xs md:text-sm p-4 font-bold">
          🧳 You have 5 items on your list , and you already packed 0 (0%){" "}
        </p>
      </em>
    </footer>
  );
};

export default Stats;
