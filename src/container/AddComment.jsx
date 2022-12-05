const AddComment = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center py-12 px-4">
      {/* Form === Comment */}
      <form
        onSubmit={submitForm}
        action=""
        className="w-full min2xl:max-w-[1187px] flex flex-col items-start gap-4"
      >
        {/* Inputs */}
        <input
          className="bg-[#303030] rounded-md outline-none border-2 border-transparent focus:border-darkGreen duration-100 px-4 py-2"
          type="text"
          placeholder="name"
          required
        />
        <input
          className="bg-[#303030] rounded-md outline-none border-2 border-transparent focus:border-darkGreen duration-100 px-4 py-2"
          type="email"
          placeholder="email"
          required
        />
        {/* Man or Woman */}
        <div className="flex items-center">
          <input type="radio" name="rb" id="rb1" checked />
          <label for="rb1">he/his</label>
          <input type="radio" name="rb" id="rb2" />
          <label for="rb2">she/her</label>
        </div>
        {/* Comment */}
        <textarea
          className="w-full bg-[#303030] rounded-md outline-none border-2 border-transparent focus:border-darkGreen duration-100 px-4 py-2"
          name="comment"
          id=""
          rows={"5"}
          required
        ></textarea>
        {/* Button */}
        <button className="bg-darkGreen px-8 py-2 rounded-md hover:bg-opacity-70">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddComment;
