import React from 'react';
import './Authorization.scss';
import axios from "axios";
import swal from 'sweetalert';

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      loading: false,
      email: '',
      password: '',
      errorEmail: 'Значение в поле не соответствует email',
      errorPassword: 'Пароль не может быть меньше чем 12 символов',
      isErrorEmail: false,
      isErrorPassword: false,
      isDirtyFieldEmail: false,
      isDirtyFieldPassword: false
    }
  }

  change=(e)=>{
    const {name, checked, type}=e.target;
    let {value}=e.target;
    this.setVerifyDirty(name);

    if(type==='checkbox') {
      value=checked
    } 
    if(type==='select-multiple') {
      value=[...e.target.selectedOptions].map(option=>option.value);
    } 
    
    if(name==='email') {
      this.setState({'isErrorEmail': !this.validateEmail(value)}); //проверяем емаил на валидность
    } else if(name==='password') {
      this.setState({'isErrorPassword': !this.validatePassword(value)});
    }
    this.setState({[name]: value});
  }

  setVerifyDirty=(name)=>{
    if(!this.state[name]){
      let fieldName='isDirtyField'+name.substr(0,1).toUpperCase()+name.substring(1);
      this.setState({[fieldName]:true});
    }
  }

  validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword(password){
    return password.length>=12
  }

  login = (e)=>{
    e.preventDefault();
    if(!this.state.isErrorEmail && this.state.isDirtyFieldEmail && !this.state.isErrorPassword && this.state.isDirtyFieldPassword) {
      this.setState({
        loading: true
      })
      let data={
        email: this.state.email,
        password: this.state.password
      }
      axios.post('https://jsonplaceholder.typicode.com/users',
        data
      ).then(() => {
        swal("Успех", "Вы успешно авторизовались!", "success");
        this.setState({
          loading: false
        })
      })
    } else {
      swal("Ошибка входа", "У вас есть невалидные данные!", "error");
    }
  }

	componentDidUpdate(){
		console.log(this.state)
	}

  render(){
    const {email,password,errorEmail,errorPassword,isErrorEmail,isErrorPassword}=this.state;
    return(
      <div className="Authorization">
        <h1 className="Authorization__headline">Авторизация</h1>
        <form onSubmit={this.login} className="Authorization__form">
          <input placeholder="Email" name="email" value={email} onChange={this.change} className="Authorization__input" />
          {isErrorEmail && <span className="Authorization__error">{errorEmail}</span>}  
          <input placeholder="Пароль" name="password" value={password} onChange={this.change} className="Authorization__input" />  
          {isErrorPassword && <span className="Authorization__error">{errorPassword}</span>}
          <button className="Authorization__button">Войти</button>
        </form>
      </div>
    )
  }
}

export default Authorization;