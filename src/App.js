import React, { Component } from 'react';
import './App.css';



//COMPONENTS
import Principal from './components/Principal'
import Acercademi from './components/Acercademi';
import Proyectos from './components/Proyectos'

class App extends Component {
  render() {
    return (
      <div className="App">
          
         <Principal/>
         <Acercademi/>
         <Proyectos/>
      </div>
    );
  }
}

export default App;
