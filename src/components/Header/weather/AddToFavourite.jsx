import { useContext, useEffect, useState } from "react";
import HeartIcon from "../../../assets/heart.svg";
import RedHeartIcon from "../../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../../context";
const AddToFavourite = () => {
  const { addToFavourites, removeFromFavourites, favourites } =
    useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const [isFavourite, toogleFavourite] = useState(false);
  const { latitude, longitude, location } = weatherData;
  useEffect(()=> {
    const found = favourites.find(fav=> fav.location === location)
    if (found) {
      toogleFavourite(true);
    } else {
      toogleFavourite(false);
    }
  },[])
  const handleFavourites = () => {
    const found = favourites.find(fav=> fav.location === location)
    if (found) {
      removeFromFavourites(latitude,longitude,location);
    } else {
      addToFavourites(latitude,longitude,location);
    }
    toogleFavourite(!isFavourite);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavourites}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="Heart Icon" />
        </button>
      </div>
    </div>
  );
};
export default AddToFavourite;
