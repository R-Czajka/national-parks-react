import { useState } from 'react'
import forestImage from './forest-image.jpg'
import { ForestList } from "./ForestList";
import { TreeType } from "./TreeType";
import { ParkImages } from "./ParkImages";

import './App.css'

function App() {
  const [count, setCount] = useState(0)
      
  return (
    <>
      <div>
        <img src={forestImage} className="forest" alt="forest" />
      </div>
      <h1>Matsalu Forest</h1>
      <p>
        National Park in Western Estonia
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <ParkImages />
      </div>
      <div>
      <h4>
          Areas of forest land
      </h4>
        <ForestList />
      </div>
      <div> <hr className="bar" /> </div>
      <div className="tType">
        <TreeType />
      </div>
      <p className="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      </p>
    </>
  )
}

export default App
