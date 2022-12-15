import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utils/AddComment";

const AddComment = () => {
  const [isShown, setIsShown] = useState(false);
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
    })
      .then(() => {
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.comment.value = "";
        setIsShown(true);
      })
      .then(() => {
        setTimeout(() => {
          setIsShown(false);
        }, 5000);
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
      {isShown && (
        <div className="fixed bottom-10 right-0 bg-green-600 px-4 py-2 rounded-l-xl sm:rounded-none animate-pulse">
          <h2 className="text-white font-bold">
            Your comment was sent successfully, It needs to be approved...
          </h2>
        </div>
      )}
    </div>
  );
};

export default AddComment;
