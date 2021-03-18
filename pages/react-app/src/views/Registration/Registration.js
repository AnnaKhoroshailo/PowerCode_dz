import React from 'react';
import './Registration.scss';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      password: '',
      gender: ''
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
		const {firstName, lastName, age, email,password, gender}=this.state;
    alert(`Имя: ${firstName} \nФамилия: ${lastName} \nВозраст: ${age} \nEmail: ${email} \nПароль: ${password} \nПол: ${gender}`);
	}

	componentDidUpdate(){
		console.log(this.state)
  }
  
  render(){
    const {firstName,lastName,age,email,password,gender}=this.state;
    return(
      <div className="Registration">
        <h1 className="Registration__headline">Регистрация</h1>
        <form onSubmit={this.submitForm} className="Registration__form">
          <input placeholder="Имя" name="firstName" value={firstName} onChange={this.change} className="Registration__input" required />
          <input placeholder="Фамилия" name="lastName" value={lastName} onChange={this.change} className="Registration__input" required /> 
          <input placeholder="Возраст" name="age" value={age} onChange={this.change} className="Registration__input" required />   
          <input placeholder="Email" name="email" value={email} onChange={this.change} className="Registration__input" required />  
          <input placeholder="Пароль" name="password" value={password} onChange={this.change} className="Registration__input" required /> 
          <select name="gender" value={gender} onChange={this.change}  className="Registration__select" required>
            <option value="">Выберите пол</option>
            <option value="Man">Мужчина</option>
            <option value="Woman">Женщина</option>
          </select>
          <button className="Registration__button">Зарегистрироваться</button>
        </form>
      </div>
    )
  }
}

export default Registration;