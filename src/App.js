import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from "./components/counters";
import './App.css'

class App extends Component {
 
  render() { 
    return ( 
    <React.Fragment>
    <NavBar totalCounters ={this.state.counters.filter(c => c.value > 0).length}
    />
    <main className = "container">
      <Counters
      counters ={this.state.counters}
       onDelete ={this.handleDelete} 
       onIncrement ={this.handelIncrement}
       onReset = {this.handelReset}
      />
    </main>
    </React.Fragment>
    );
  }
}
 
export default App;