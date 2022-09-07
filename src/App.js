import logo from './logo.png';
import './App.css';
import { currentLocation } from "./Geolocation"
import { SendLocation } from "./LocationClient"

async function getLocation() {
  console.log("waiting...")

  const [latitude, longitude] = await currentLocation()
  console.log(latitude, longitude)

  SendLocation('jacoyutorius-device-2', latitude, longitude)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, HOW ARE YOU
        </p>

        <button onClick={getLocation}>send your location</button>
      </header>
    </div>
  );
}

export default App;
