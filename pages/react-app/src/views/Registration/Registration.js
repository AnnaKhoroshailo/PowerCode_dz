import React from 'react';
import './Registration.scss';
import axios from "axios";
import swal from 'sweetalert';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      loading: false,
      firstName: '',
      lastName: '',
      userName: '',
      age: '',
      email: '',
      password: '',
      gender: '',
      errorEmail: 'Значение в поле не соответствует email',
      errorPassword: 'Пароль не может быть меньше чем 12 символов',
      errorUserName: 'Значение в поле должно быть длиной от 8 до 24 и состоять только из латинских символов',
      errorFirstName: 'Значение в поле должно состоять только из кирилических символов',
      errorLastName: 'Значение в поле должно состоять только из кирилических символов',
      errorAge: 'Значение в поле должно соответствовать человеческому возрасту',
      isErrorEmail: false,
      isErrorPassword: false,
      isErrorUserName: false,
      isErrorFirstName: false,
      isErrorLastName: false,
      isErrorAge: false,
      isDirtyFieldEmail: false,
      isDirtyFieldPassword: false,
      isDirtyFieldUserName: false,
      isDirtyFieldFirstName: false,
      isDirtyFieldLastName: false,
      isDirtyFieldAge: false
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
      this.setState({'isErrorEmail': !this.validateEmail(value)}); 
    } else if(name==='password') {
      this.setState({'isErrorPassword': !this.validatePassword(value)});
    } else if(name==='userName') {
      this.setState({'isErrorUserName': !this.validateUserName(value)});
    } else if(name==='firstName') {
      this.setState({'isErrorFirstName': !this.validateName(value)});
    } else if(name==='lastName') {
      this.setState({'isErrorLastName': !this.validateName(value)});
    } else if(name==='age') {
      this.setState({'isErrorAge': !this.validateAge(value)});
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

  validateUserName(userName){
    const re = /^[a-zA-Z]{8,24}$/;
    return re.test(userName);
  }

  validateName(name){
    const re = /^[\u0400-\u04FF]+$/;
    return re.test(name);
  }

  validateAge(age){
    const re = /^[0-9]{1,3}$/;
    return age>=1 && age<=120 && re.test(age);
  }

  registration = (e)=>{
    e.preventDefault();
    if(!this.state.isErrorEmail && this.state.isDirtyFieldEmail && !this.state.isErrorPassword && this.state.isDirtyFieldPassword && !this.state.isErrorUserName && this.state.isDirtyFieldUserName && !this.state.isErrorFirstName && this.state.isDirtyFieldFirstName && !this.state.isErrorLastName && this.state.isDirtyFieldLastName && !this.state.isErrorAge && this.state.isDirtyFieldAge) {
      this.setState({
        loading: true
      })
      let data={
        email: this.state.email,
        password: this.state.password,
        userName: this.state.userName,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        gender: this.state.gender
      }
      axios.post('https://jsonplaceholder.typicode.com/users',
        data
      ).then(() => {
        swal("Успех", "Вы успешно зарегистрированы!", "success");
        this.setState({
          loading: false
        })
      })
    } else {
      swal("Ошибка регистрации", "У вас есть невалидные данные!", "error");
    }
  }

	componentDidUpdate(){
		console.log(this.state)
  }
  
  render(){
    const {firstName,lastName,userName,age,email,password,gender,errorEmail,errorPassword,errorUserName,errorFirstName,errorLastName,errorAge,isErrorEmail,isErrorPassword,isErrorUserName,isErrorFirstName,isErrorLastName,isErrorAge}=this.state;
    return(
      <div className="Registration">
        <h1 className="Registration__headline">Регистрация</h1>
        <form onSubmit={this.registration} className="Registration__form">
          <input placeholder="Имя" name="firstName" value={firstName} onChange={this.change} className="Registration__input" />
          {isErrorFirstName && <span className="Registration__error">{errorFirstName}</span>} 
          
          <input placeholder="Фамилия" name="lastName" value={lastName} onChange={this.change} className="Registration__input" /> 
          {isErrorLastName && <span className="Registration__error">{errorLastName}</span>} 

          <input placeholder="Имя пользователя" name="userName" value={userName} onChange={this.change} className="Registration__input" />
          {isErrorUserName && <span className="Registration__error">{errorUserName}</span>} 
          
          <input placeholder="Возраст" name="age" value={age} onChange={this.change} className="Registration__input" />   
          {isErrorAge && <span className="Registration__error">{errorAge}</span>} 

          <input placeholder="Email" name="email" value={email} onChange={this.change} className="Registration__input" />  
          {isErrorEmail && <span className="Registration__error">{errorEmail}</span>} 
          
          <input placeholder="Пароль" name="password" value={password} onChange={this.change} className="Registration__input" /> 
          {isErrorPassword && <span className="Registration__error">{errorPassword}</span>}
          
          <select name="gender" value={gender} onChange={this.change}  className="Registration__select">
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