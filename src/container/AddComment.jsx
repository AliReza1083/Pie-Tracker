import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../utils/AddComment";

const AddComment = () => {
  const colRef = collection(db, "Approve");

  const submitForm = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      name: e.target.name.value,
      email: e.target.email.value,
      man: e.target[2].checked,
      woman: e.target[3].checked,
      comment: e.target.comment.value,
      createdAt: serverTimestamp(),
    }).then(() => {
      alert("Added");
    });
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
          className="bg-[#303030] dark:bg-[#f2f2f2] rounded-md outline-none border-2 border-transparent focus:border-darkGreen duration-100 px-4 py-2"
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <input
          className="bg-[#303030] dark:bg-[#f2f2f2] rounded-md outline-none border-2 border-transparent focus:border-darkGreen duration-100 px-4 py-2"
          type="email"
          name="email"
          placeholder="email"
          required
        />
        {/* Man or Woman */}
        <div className="flex items-center">
          <input type="radio" name="rb" id="rb1" defaultChecked="true" />
          <label htmlFor="rb1">he/his</label>
          <input type="radio" name="rb" id="rb2" />
          <label htmlFor="rb2">she/her</label>
        </div>
        {/* Comment */}
        <textarea
          className="w-full bg-[#303030] dark:bg-[#f2f2f2] rounded-md outline-none border-2 border-transparent focus:border-darkGreen duration-100 px-4 py-2"
          name="comment"
          id=""
          rows={"5"}
          required
        ></textarea>
        {/* Button */}
        <button className="text-white bg-darkGreen px-8 py-2 rounded-md hover:bg-opacity-70">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddComment;
