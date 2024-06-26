import Heart from "../../assets/heart.svg";
const Favourite = ({ onShow }) => {
  return (
    <div
      onClick={onShow}
      className="p-2  hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
    >
      <img src={Heart} alt="Heart Logo" />
      <span>Favourite Locations</span>
    </div>
  );
};
export default Favourite;
