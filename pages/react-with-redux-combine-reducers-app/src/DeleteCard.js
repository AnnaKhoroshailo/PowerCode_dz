import React from "react";
import {connect} from "react-redux";

import { Button, Form } from 'react-bootstrap';

class DeletingCard extends React.Component{
  deleteCard() {
    this.props.onDeleteCard(this.cardSelect.value); 
  }
  render(){
    return(
      <div className="col-md-6">
        <div className="row">
          <div className="col-6">
            <Form.Control as="select" custom ref={(select)=>{this.cardSelect=select}}>
              {this.props.cards.map((card,i)=>(
              <option key={i} value={card}>{card}</option> 
              ))}
            </Form.Control>
          </div>
          <div className="col-6">
            <Button variant="danger" className="w-100" onClick={this.deleteCard.bind(this)}>Удалить карточку</Button>
          </div>
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
    onDeleteCard: (card)=>{
      dispatсh ({type: "DELETE_CARD", payload: card}) 
    } 
  })
)(DeletingCard);