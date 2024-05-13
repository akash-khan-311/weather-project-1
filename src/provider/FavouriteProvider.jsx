import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);
  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([...favourites, { latitude, longitude, location }]);
  };
  const removeFromFavourites = (latitude, longitude, location) => {
    setFavourites(
      favourites.filter(
        (favourite) =>
          favourite.latitude !== latitude &&
          favourite.longitude !== longitude &&
          favourite.location !== location
      )
    );
  };
  return (
    <FavouriteContext.Provider
      value={{ addToFavourites, removeFromFavourites, favourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
