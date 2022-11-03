import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Web3</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This website is powered by Vite and React. It is hosted on{" "}
		  <a href="https://ipfs.io" target="_blank">IPFS</a> and uses{" "}
		  <a href="https://ethereum.org" target="_blank">Ethereum</a> for
		  decentralized storage and computation.
        </p>
      </div>
    </div>
  )
}

export default App
