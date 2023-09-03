import initialItems from "../../../initialItems";

const PackingList = () => {
  initialItems.map((item) => {
    console.log(item);
  });

  return (
    <div className="bg-amber-950 h-96 flex justify-center items-end">
      {initialItems.map((item) => {
        return (
          <>
            <p className="text-white">{item.description}</p>
          </>
        );
      })}

      <form className="pb-3">
        <input
          placeholder="SORT BY INPUT ORDER"
          className="mx-1 lg:mx-2 w-48 md:w-52 rounded-full text-sm bg-orange-200 placeholder:text-black text-center"
        ></input>
        <button className="mx-1 lg:mx-1 w-24 md:w-32 rounded-full bg-orange-200 text-sm px-1">
          CLEAR LIST
        </button>
      </form>
    </div>
  );
};

export default PackingList;
