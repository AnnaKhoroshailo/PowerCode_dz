let login=prompt("Логин");
if(login=="ин") {
	let password=prompt("Пароль");
	if(password=="admin") {
		alert("Добро пожаловать!");
	} else if(! password) {
		alert("Вход отменён");
	} else {
		alert("Пароль неверен");
	}
} else if(! login) {
	alert("Вход отменён");
} else {
	alert("Я вас не знаю");
}

console.log("Арифметическая прогрессия");
let a1=3;
let d=5;
for (i=1; i<101; i++) {
	an=a1+d*(i-1);
	console.log(an);
}


console.log("Последовательность Фибоначчи");
for (j=0; j<25; j++) {
	fn=(Math.pow(((1+Math.sqrt(5))/2),j)-Math.pow(((1-Math.sqrt(5))/2),j))/Math.sqrt(5);
	console.log(fn);
}