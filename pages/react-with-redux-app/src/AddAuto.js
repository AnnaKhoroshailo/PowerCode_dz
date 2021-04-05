import React from "react";
import {connect} from "react-redux";

class AddingAuto extends React.Component{
  addAuto() {
    this.props.onAddAuto(this.autoInput.value); 
    this.autoInput.value=""; 
  }
  render(){
    return(
      <div>
        <input type="text" ref={(input)=>{this.autoInput=input}}  className="App__input" /> 
        <button onClick={this.addAuto.bind(this)} className="App__button">Добавить автомобиль</button>
      </div>
    )
  }
}

export default connect( 
  state=>({ 
    testStore: state
  }),
  dispatсh=>({ 
    onAddAuto: (auto)=>{
      dispatсh ({type: "ADD_AUTO", payload: auto}) 
    } 
  })
)(AddingAuto);