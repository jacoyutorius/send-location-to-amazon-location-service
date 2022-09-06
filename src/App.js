import logo from './logo.png';
import './App.css';

async function Subscribe() {
  console.log(`Hi, ${new Date()}`)

  // 1分おきに実行
  await new Promise(resolve => setTimeout(resolve, 1000 * 30)) 
  await Subscribe();
}

function App() {
  Subscribe()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, HOW ARE YOU
        </p>
      </header>
    </div>
  );
}

export default App;
