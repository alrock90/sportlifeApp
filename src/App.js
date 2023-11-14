import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { SideNavBar } from "./features/SideNavBar/SideNavBar"
import { Field } from './features/field/Field';


function App() {
  return (
    <div className="App">
      <div className='main'>
        <div  className='sideBar'>
            <SideNavBar />
        </div>
        
        <div className='fieldSide'>
          <Field  />
        </div>
        

      </div>

    </div>
  );
}

export default App;
