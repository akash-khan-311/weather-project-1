import { useContext } from "react";
import { FavouriteContext, LocationContext } from "../../context";
const FavouriteListModal = () => {
  const { favourites } = useContext(FavouriteContext);
  const { setSelectedLocation } = useContext(LocationContext);

  return (
    <div className="max-w-xs z-50 py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites.length > 0 ? (
          favourites.map((fav) => (
            <li className="hover:bg-gray-200" key={fav.location}>
              <a onClick={() => setSelectedLocation(fav.location)}>
                {fav.location}
              </a>
            </li>
          ))
        ) : (
          <li className="hover:bg-gray-200">No Favourite Locations</li>
        )}
      </ul>
    </div>
  );
};
export default FavouriteListModal;
