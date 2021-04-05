import React from "react";
import {connect} from "react-redux";

class ListAuto extends React.Component{
  
  render(){
    return(
      <ul className="App__list">
        {this.props.testStore.map((auto,index)=>
          <li key={index}>{auto}</li>
        )}
      </ul>
    )
  }
}

export default connect( 
  state=>({ 
    testStore: state
  }),
  dispatсh=>({ 
    
  })
)(ListAuto);