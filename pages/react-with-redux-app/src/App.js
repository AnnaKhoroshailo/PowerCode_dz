import React from "react";
import './App.css';
import {connect} from "react-redux"; 
import AddingAuto from "./AddAuto.js";
import ListAuto from "./ListAuto.js";

class App extends React.Component {
  render() {
    console.log(this.props.testStore);

    return (
      <div className="App">
        <header className="App-header">
          <h1>Автомобили в наличии</h1>
          <ListAuto/>
          <AddingAuto/>
        </header>
      </div>
    );
  }
}

export default connect( 
  state=>({ 
    testStore: state
  }),
  dispatсh=>({ 
    
  })
)(App);
