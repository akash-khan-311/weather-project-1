import Header from "./components/Header/Header";
import WeatherBoard from "./components/Header/weather/WeatherBoard";
import {
  FavouriteProvider,
  WeatherProvider,
  LocationProvider,
} from "./provider";
const App = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <>
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
};
export default App;
