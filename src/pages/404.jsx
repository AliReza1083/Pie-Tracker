import { Button } from "../components";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl mb-12">404</h1>
      <Button path={"/"} value="Go Home" />
    </div>
  );
};

export default NotFound;
