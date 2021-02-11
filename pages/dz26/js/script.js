let authButton = document.getElementById('login');

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
		balanceFull.addEventListener('input', balanceFullChange)
	}

    let balanceElem = document.getElementById('balance');
    if(balanceElem){
    	let balance = JSON.parse(localStorage.getItem('balance'));
    	let balanceGeneral=balance.full-balance.reserved
    	balanceElem.innerText = 'Баланс - ' + balanceGeneral + ' USD (reserved '+balance.reserved  + ' USD)'
    }
});

function balanceFullChange(e){
	let balance=JSON.parse(localStorage.getItem('balance'));
	if(e.target.value && e.target.value>balance.reserved) {
		balance.full=e.target.value
		localStorage.setItem('balance', JSON.stringify(balance))
	}
}
