import logo from './logo.png';
import './App.css';
import { currentLocation } from "./Geolocation"

// async function Subscribe() {
//   console.log(`Hi, ${new Date()}`)

//   const location = currentLocation()
//   console.log(location)

//   // 1分おきに実行
//   await new Promise(resolve => setTimeout(resolve, 1000 * 30)) 
//   await Subscribe();
// }

async function sendLocation() {
  console.log("waiting...")
  const location = await currentLocation()
  console.log(location)
}

function App() {
  // Subscribe()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, HOW ARE YOU
        </p>

        <button onClick={sendLocation}>send your location</button>
      </header>
    </div>
  );
}

export default App;
