import Man from "../assets/man_user.png";
import Woman from "../assets/woman_user.png";

import { db } from "../utils/AddComment";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

import { convertTimestamp } from "./app";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const colRef = collection(db, "Comments");

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setComments(
        snapshot.docs.map((comment) => ({
          ...comment.data(),
          id: comment.id,
        }))
      );
    });
  }, []);

  console.log(comments);

  return (
    <div className="flex flex-col justify-center items-center pb-12 px-4">
      <div className="w-full min2xl:max-w-[1187px] flex flex-col gap-8">
        {comments.map((comment) => {
          return (
            <div className="flex gap-4">
              {/* User Image */}
              <img
                className="w-[80px] h-[80px] sm:w-[50px] sm:h-[50px]"
                src={comment.gender == "man" ? Man : Woman}
                alt=""
              />
              {/* Information */}
              <div className="mt-2">
                <h2 className="text-lg leading-[.8]">{comment.name}</h2>
                <small className="text-white text-opacity-70 dark:text-black dark:text-opacity-70">
                  {convertTimestamp(parseInt(comment.createdAt))}
                </small>
                <p className="mt-2 sm:text-sm">{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
