let authButton = document.getElementById('login');
const usersUrl='https://jsonplaceholder.typicode.com/users'

if(authButton){
	authButton.addEventListener('click', logIn)
}

function logIn(){
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let user = {
		username,
		password,
		role: 'admin',
		token: 'Baerer wiurehwjhj3h4j2h4b2jh4234g23jh4h2j4h2j342j4h2j34h2j4hg2j34h234'
	}

	localStorage.setItem('user', JSON.stringify(user))
	window.location.href = 'index.html';

	let balance = {
		full: 359,
		reserved: 57,
		currency: 'USD'
	}

	localStorage.setItem('balance', JSON.stringify(balance))
}

document.addEventListener('DOMContentLoaded', () => {
    let userElem = document.getElementById('user');
    if(userElem){
    	let user = JSON.parse(localStorage.getItem('user'));
    	userElem.innerText = 'Приветствую ' + user.username 
    }

    let balanceFull = document.getElementById('balance-full');
	if(balanceFull){
		balanceFull.addEventListener('change', balanceFullChange)
	}

    let balanceElem = document.getElementById('balance');
    if(balanceElem){
    	let balance = JSON.parse(localStorage.getItem('balance'));
    	let balanceGeneral=balance.full-balance.reserved
    	balanceElem.innerText = 'Баланс - ' + balanceGeneral + ' USD (reserved '+balance.reserved  + ' USD)'
    }


    let usersConatiner=document.getElementById('users'); 
    if(usersConatiner){
    	getUsers(); 
    }
});

function balanceFullChange(e){
	let balance=JSON.parse(localStorage.getItem('balance'));
	if(e.target.value && e.target.value>balance.reserved) {
		balance.full=e.target.value
		localStorage.setItem('balance', JSON.stringify(balance))
		let balanceElem = document.getElementById('balance');
    	let balanceGeneral=balance.full-balance.reserved
    	balanceElem.innerText = 'Баланс - ' + balanceGeneral + ' USD (reserved '+balance.reserved  + ' USD)'
	}
}



async function getUsers(){
	try{
		let response=await fetch(usersUrl); 
		let data=await response.json(); 
		appendAllUsers(data) 
	} catch(e){
		console.log(e)
	} finally{
		 
	}
}

function appendAllUsers(users){
	console.log(users)
	users.forEach(user => {
		let userItem=createNodeElem('div',['users__item']) 

		let attr=[ 
			{
				name: 'src',
				value: 'https://caronrentals.com/images/user.png'
			},
			{
				name: 'alt',
				value: user.name
			}
		]

		let imgElem=createNodeElem('img',['users__img'],'',attr) 
		let nameElem=createNodeElem('div',['users__name'],user.name) 
		let emailElem=createNodeElem('div',['users__email'],user.email) 
		let phoneElem=createNodeElem('div',['users__phone'],user.phone) 
		
		userItem.append(imgElem,nameElem,emailElem,phoneElem) 
		
		document.getElementById('users').appendChild(userItem) 
	})
}

function createNodeElem(type,classes,content,attributes){ 
	let node=document.createElement(type);
	classes.forEach(classItem => {
		node.classList.add(classItem);
	})
	if(content) {
		node.innerText=content; 
	}
	if(attributes && attributes.length>0){ 
		attributes.forEach(attribute => {
			node.setAttribute(attribute.name,attribute.value); 
		})
	}
	return node; 
}


const getPetUrl='https://petstore.swagger.io/v2/pet'; 

async function searchPet(){ 
	document.getElementById('pets').innerHTML=''; 
	let form=document.forms.searchPet; 
	let id=form.petId.value 
	try{
		let response=await fetch(`${getPetUrl}/${id}`); 
		let data=await response.json(); 
		console.log(data) 

		let petItem=createNodeElem('div',['users__item']) 
		let imgElem=createNodeElem('img',['users__img'],'',[{name: 'src', value: data.photoUrls[0]}]) 
		let nameElem=createNodeElem('div',['users__name'],data.name)
		
		petItem.append(imgElem,nameElem) 
		
		document.getElementById('pets').appendChild(petItem) 
	} catch(e){
		console.log(e);
		document.getElementById('pets').innerText='Ничего не найдено'; 
	}
}


async function searchPetByStatus(){ 
	document.getElementById('petsStatus').innerHTML=''; 
	let form=document.forms.searchPetStatus; 
	let status=form.petStatus.value;
	try{
		let response=await fetch(`${getPetUrl}/findByStatus?status=${status}`); 
		let data=await response.json(); 
		console.log(data) 

		data.forEach(pet => {
			let petItem=createNodeElem('div',['users__item']) 
			let imgElem=createNodeElem('img',['users__img'],'',[{name: 'src', value: pet.photoUrls[0]}]) 
			let nameElem=createNodeElem('div',['users__name'],pet.name)
			petItem.append(imgElem,nameElem) 
			document.getElementById('petsStatus').appendChild(petItem) 
		})
	} catch(e){
		console.log(e);
		document.getElementById('petsStatus').innerText='Ничего не найдено'; 
	}
}