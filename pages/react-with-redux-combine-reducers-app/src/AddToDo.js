import React from "react";
import {connect} from "react-redux";

import { Button, Form } from 'react-bootstrap';

class AddingToDo extends React.Component{
  addToDo() {
    this.props.onAddToDo({title: this.toDoInput.value, card: this.cardSelect.value}); 
    this.toDoInput.value="";
  }
  render(){
    return(
      <div className="row mt-3">
        <div className="col-4">
          <Form.Control ref={(input)=>{this.toDoInput=input}} placeholder="Введите план" />
        </div>
        <div className="col-2">
          <Form.Control as="select" custom ref={(select)=>{this.cardSelect=select}}>
            {this.props.cards.map((card,i)=>(
             <option key={i} value={card}>{card}</option> 
            ))}
          </Form.Control>
        </div>
        <div className="col-3">
          <Button variant="success" onClick={this.addToDo.bind(this)} className="w-100">Добавить план</Button>
        </div>
      </div>
    )
  }
}

export default connect( 
  state=>({ 
    cards: state.cards
  }),
  dispatсh=>({ 
    onAddToDo: (toDo)=>{
      dispatсh ({type: "ADD_TODO", payload: toDo}) 
    } 
  })
)(AddingToDo);