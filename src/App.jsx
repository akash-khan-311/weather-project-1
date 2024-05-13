import Header from "./components/Header/Header";
import WeatherBoard from "./components/Header/weather/WeatherBoard";
import { FavouriteProvider, WeatherProvider } from "./provider";
const App = () => {
  return (
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
  );
};
export default App;
