import React from "react";
import './App.css';
import {connect} from "react-redux"; 
import AddingToDo from "./AddToDo.js";
import AddingCard from "./AddCard.js";
import DeletingToDo from "./DeleteToDo.js";
import DeletingCard from "./DeleteCard.js";

import { Card } from 'react-bootstrap';

class App extends React.Component {
  deleteCard=cardDelete=>{
    this.props.onDeleteCard(cardDelete.card); 
  }
  deleteToDo=toDoDelete=>{
    this.props.onDeleteToDo(toDoDelete.toDo.title); 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header container">
          <div className="row">
            <div className="col-12 mb-5">
              <h1>Мои планы</h1>
              <AddingCard/>
              <AddingToDo/>
            </div>
          </div>

          <div className="mb-4">
            <div className="row">
              {this.props.cards.map((card,i)=>(
                <div className="col-md-4 mb-2" key={i}> 
                  <Card bg="primary" text="white">
                    <Card.Header>
                      {card}
                      <div className="card__delete" onClick={()=>{this.deleteCard({card})}}>
                        x
                      </div>
                    </Card.Header>
                    <Card.Body>
                      {this.props.todos.filter(todo => todo.card===card).map((toDo,index) =>
                        <Card.Title key={index}>
                          {toDo.title}
                          <div className="card__delete" onClick={()=>{this.deleteToDo({toDo})}}>
                            x
                          </div>
                        </Card.Title>
                      )}
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="row mb-4">
            <DeletingCard/>
            <DeletingToDo/>
          </div>
        </header>
      </div>
    );
  }
}

export default connect( 
  state=>({ 
    todos: state.todos,
    cards: state.cards
  }),
  dispatсh=>({ 
    onDeleteCard: (card)=>{
      dispatсh ({type: "DELETE_CARD", payload: card}) 
    },
    onDeleteToDo: (todo)=>{
      dispatсh ({type: "DELETE_TODO", payload: todo}) 
    }  
  })
)(App);
