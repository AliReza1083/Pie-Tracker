import Pie_1 from "../assets/pie_1.jpg";
import Pie_2 from "../assets/pie_2.jpg";

const Information = () => {
  return (
    <div id="information" className="py-16 lg:py-[90px] flex justify-center">
      <div className="w-full min2xl:max-w-[1500px] px-12 md:px-8 sm:px-4">
        <h1 className="text-6xl lg:text-[5vw] sm:text-3xl text-center">
          Information
        </h1>
        <div className="flex gap-12 mt-8 items-center px-12 md:px-0 lg:flex-col">
          <p className="text-2xl lg:text-center md:text-base">
            A pie is a baked dish which is usually made of a pastry dough casing
            that contains a filling of various sweet or savoury ingredients.
            Sweet pies may be filled with fruit (as in an apple pie), nuts
            (pecan pie), brown sugar (sugar pie), sweetened vegetables (rhubarb
            pie), or with thicker fillings based on eggs and dairy (as in
            custard pie and cream pie). Savoury pies may be filled with meat (as
            in a steak pie or a Jamaican patty), eggs and cheese (quiche) or a
            mixture of meat and vegetables (pot pie).
          </p>
          <img className="w-full max-w-[413px] rounded-lg" src={Pie_1} alt="" />
        </div>

        <div className="flex gap-12 mt-12 items-center px-12 md:px-0 lg:flex-col-reverse">
          <img className="w-full max-w-[413px]" src={Pie_2} alt="" />
          <p className="text-2xl lg:text-center md:text-base">
            A pie is a baked dish which is usually made of a pastry dough casing
            that contains a filling of various sweet or savoury ingredients.
            Sweet pies may be filled with fruit (as in an apple pie), nuts
            (pecan pie), brown sugar (sugar pie), sweetened vegetables (rhubarb
            pie), or with thicker fillings based on eggs and dairy (as in
            custard pie and cream pie). Savoury pies may be filled with meat (as
            in a steak pie or a Jamaican patty), eggs and cheese (quiche) or a
            mixture of meat and vegetables (pot pie).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
