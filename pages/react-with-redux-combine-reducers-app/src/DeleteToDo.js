import React from "react";
import {connect} from "react-redux";

import { Button, Form } from 'react-bootstrap';

class DeletingToDo extends React.Component{
  deleteToDo() {
    this.props.onDeleteToDo(this.toDoSelect.value); 
  }
  render(){
    return(
      <div className="col-md-6">
        <div className="row">
          <div className="col-6">
            <Form.Control as="select" custom ref={(select)=>{this.toDoSelect=select}}>
              {this.props.todos.map((toDo,i)=>(
                <option key={i} value={toDo.title}>{toDo.title}</option> 
              ))}
            </Form.Control>
          </div>
          <div className="col-6">
            <Button variant="danger" className="w-100" onClick={this.deleteToDo.bind(this)}>Удалить план</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect( 
  state=>({ 
    todos: state.todos
  }), 
  dispatсh=>({ 
    onDeleteToDo: (todo)=>{
      dispatсh ({type: "DELETE_TODO", payload: todo}) 
    } 
  })
)(DeletingToDo);