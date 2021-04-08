import React from "react";
import {connect} from "react-redux";

import { Button, Form } from 'react-bootstrap';

class AddingCard extends React.Component{
  addCard() {
    this.props.onAddCard(this.cardInput.value); 
    this.cardInput.value="";
  }
  render(){
    return(
      <div className="row mt-3">
        <div className="col-4">
          <Form.Control ref={(input)=>{this.cardInput=input}} placeholder="Введите дату / название карточки" />
        </div>
        <div className="col-3">
          <Button variant="success" onClick={this.addCard.bind(this)} className="w-100">Добавить карточку</Button>
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
    onAddCard: (card)=>{
      dispatсh ({type: "ADD_CARD", payload: card}) 
    } 
  })
)(AddingCard);