import './Users.scss';
import React from 'react';
import User from "../../components/User/User";
import axios from "axios";

class Users extends React.Component { 
  constructor(props) { 
    super(props);
    this.state={
      users: [],
      loading: true
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=> {
      this.setState({
        loading: false,
        users: response.data
      })
    })
  }
  
  render(){
    return (
      <div className="Users">
        <h1>Пользователи</h1>
        <div className="Users__container">
          {this.state.users.map(user=><User user={user} key={user.id}/>)}
        </div>
      </div>
    )
  }
}

export default Users;