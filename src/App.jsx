import Header from "./components/Header/Header";
import WeatherBoard from "./components/Header/weather/WeatherBoard";
import { WeatherProvider } from "./provider";
const App = () => {
  return (
    <WeatherProvider>
      <>
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </> 
    </WeatherProvider>
  );
};
export default App;
