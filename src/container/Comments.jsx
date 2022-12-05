import Man from "../assets/man_user.png";
import Woman from "../assets/woman_user.png";

const Comments = () => {
  return (
    <div className="flex justify-center pb-12 px-4">
      <div className="w-full min2xl:max-w-[1187px] flex gap-4">
        {/* User Image */}
        <img
          className="w-[80px] h-[80px] sm:w-[50px] sm:h-[50px]"
          src={Man}
          alt=""
        />
        {/* Information */}
        <div className="mt-2">
          <h2 className="text-lg leading-[.5]">User Name</h2>
          <small className="text-white text-opacity-70 dark:text-black dark:text-opacity-70">
            date
          </small>
          <p className="mt-2 sm:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
