import React from 'react';
import './Authorization.scss';

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: ''
    }
  }

  change=(e)=>{
    const {name, checked, type}=e.target;
    let {value}=e.target;
    if(type==='checkbox') {
      value=checked
    } 
    if(type==='select-multiple') {
      value=[...e.target.selectedOptions].map(option=>option.value);
    } 
    this.setState({[name]: value});
  }

  submitForm=(e)=>{
		e.preventDefault();
		const {email,password}=this.state;
    alert(`Email: ${email} \nПароль: ${password} `);
	}

	componentDidUpdate(){
		console.log(this.state)
	}

  render(){
    const {email,password}=this.state;
    return(
      <div className="Authorization">
        <h1 className="Authorization__headline">Авторизация</h1>
        <form onSubmit={this.submitForm} className="Authorization__form">
          <input placeholder="Email" name="email" value={email} onChange={this.change} className="Authorization__input" required />  
          <input placeholder="Пароль" name="password" value={password} onChange={this.change} className="Authorization__input" required />  
          <button className="Authorization__button">Войти</button>
        </form>
      </div>
    )
  }
}

export default Authorization;