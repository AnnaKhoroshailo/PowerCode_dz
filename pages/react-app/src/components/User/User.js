import './User.scss';
import React from 'react';

class User extends React.Component { 
  render(){
    let {address,name,username,email}=this.props.user;
    return(
      <div className="User">
        <div className="User__name">{name}</div>
        <div className="User__user-name">{username}</div>
        <div className="User__email">{email}</div>
        <div className="User__address">{address.city}</div>
      </div>
    )
  }
}

export default User;