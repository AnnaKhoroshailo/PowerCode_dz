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
for (n=1; n<101; n++) {
	an=a1+d*(n-1);
	console.log(an);
}


console.log("Способ проще");
let a;
do {
	a=parseInt(prompt("Введите начальное значение"));
} while (a !== a) //пока пользователь вводит нечисловое значение, выводить окно

do {
	step=parseInt(prompt("Введите шаг"));
} while (step !== step)

for (let k=0; k<100; k++) {
	console.log(a)
	a+=step;
}
 
console.log("--------------");

console.log("Последовательность Фибоначчи");
for (j=0; j<25; j++) {
	fn=(Math.pow(((1+Math.sqrt(5))/2),j)-Math.pow(((1-Math.sqrt(5))/2),j))/Math.sqrt(5);
	console.log(fn);
}


console.log("Способ проще");
let n1=0;
let n2=1;
console.log(n1);
console.log(n2);
for (let z=0; z<23; z++) {
	let sum=n1+n2;
	n1=n2;
	n2=sum;
	console.log(n2);
}