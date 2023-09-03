const Form = () => {
  return (
    <div className="bg-orange-600 h-24 w-full flex flex-col md:flex-row items-center justify-center py-5">
      <p className="font-bold text-sm md:text-xl px-3 pt-3 md:pt-1">
        What do you need for your 😎 trip ?
      </p>
      <form className="py-3">
        <input
          placeholder="1"
          className="mx-1 lg:mx-2 w-16 md:w-16 lg:w-24 rounded-full  md:py-1 bg-orange-200 placeholder:text-black text-center"
        ></input>
        <input
          placeholder="Item ..."
          className="mx-1 lg:mx-1 w-36 rounded-full md:py-1 bg-orange-200 placeholder:text-gray-600 px-4"
        ></input>
        <input
          placeholder="ADD"
          className="mx-1 lg:mx-2 w-16 lg:w-24 rounded-full md:py-1 bg-teal-500 placeholder:text-black font-bold text-center"
        ></input>
      </form>
    </div>
  );
};

export default Form;
