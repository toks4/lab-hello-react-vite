import { useState } from 'react'
import './App.css'
import Ironhacklogo from './assets/ironhack-logo-xs.png'
import MenuTop from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

function App() {
  return (<div className='App'>

          <div id='main-div'>
            <img src={Ironhacklogo} className='ironhack-logo'alt="Ironhack logo" />
            <img src={MenuTop} className='menutop-logo' alt="Menu top" /> 

            <div id='Text-content'>
              <h1>Say hello to <br>
              </br>ReactJS</h1>
              <p>You will learn how to use<br>
              </br> most popular frontend library,<br>
            </br> and become super Ninja developer.</p>
              <span><p>Awesome!</p></span>
            </div>

          </div>

          <div id='icons-div'>

            <div>
              <img src={icon1} alt="Icon 1" />
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs.</p>
            </div>

            <div>
              <img src={icon2} alt="Icon 2" />
              <h2>Components</h2>
              <p>Build encapsulated components that manage their state.</p>
            </div>

            <div>
              <img src={icon3} alt="Icon 3" />
              <h2>Single-Way</h2>
              <p>A set of immutable values are passed to the component's.</p>
            </div>

            <div>
              <img src={icon4} alt="Icon 4" />
              <h2>JSX</h2>
              <p>Statically-typed, designed to run on modern browsers.</p>
            </div>

          </div> 
          </div>
);
}
export default App


