console.log("Заглавная первая буква");
function ucFirst(str) {
	let first=str.charAt(0).toUpperCase();
	let rest=str.slice(1) //или string.substring(start, end)
	return first+rest;
}
console.log(ucFirst("вася"));
console.log(ucFirst(""));


console.log("Максимальное из двух чисел");
function max(a,b) {
	return Math.max(a,b);
}
console.log(max(2, 5));
console.log(max(3, -1));
console.log(max(1, 1));


console.log("10 случайных чисел (с помощью цикла) от первого до второго числа, что ввел пользователь");
function random(first, second) {
	let min=first;
	let max=second;
	if(min>max) { //меняем местами
		let m=min;
		min=max;
		max=m;
	}
	for (i=0; i<10; i++) {
		let num=Math.floor(Math.random()*(max-min+1))+min;
		console.log(num);
	}
}
let n1=parseInt(prompt("Введите минимальное значение"));
let n2=parseInt(prompt("Введите максимальное значение"))
random(n1,n2);


console.log("Лотерея");
function lottery() {	
    let user_num1=parseInt(prompt("Введите 1 число от 1 до 36 для лотереи"));
    let user_num2=parseInt(prompt("Введите 2 число от 1 до 36 для лотереи"));
    let user_num3=parseInt(prompt("Введите 3 число от 1 до 36 для лотереи"));
    let user_num4=parseInt(prompt("Введите 4 число от 1 до 36 для лотереи"));
    let user_num5=parseInt(prompt("Введите 5 число от 1 до 36 для лотереи"));
    let user_num6=parseInt(prompt("Введите 6 число от 1 до 36 для лотереи"));
    let min=1;
    let max=36;
    let rusut=0;
    let num="";
    let verify;
    let count=0;;
    for (i=0; i<6; i++) {
    	num+=Math.floor(Math.random()*(max-min+1))+min;
    	if(num.split(", ")[i]==String(user_num1) || num.split(" ")[i]==String(user_num2) || num.split(" ")[i]==String(user_num3) || num.split(" ")[i]==String(user_num4) || num.split(" ")[i]==String(user_num5) || num.split(" ")[i]==String(user_num6)) {
    		verify=true;
    		count+=1;
    	}
    	else {
    		verify=false;
    	}
    	num+="-"+verify;
    	if(i<5) {
    		num+=", ";
    	}
    }
	console.log(`Числа, что вы ввели: ${user_num1}, ${user_num2}, ${user_num3}, ${user_num4}, ${user_num5}, ${user_num6}`);
	console.log(`Числа, что вы выпали: ${num}`);
	console.log(`Результат: ${count}/6`);
}

lottery();


console.log("Лотерея правильный способ через 2 массива");
let userNumbers=[];
let lotteryCount=36;
let lotteryNumbers=6;
let lotteryRandom=[];
let result=0;

function addUserNumbers() {
    for(let i=0; i<lotteryNumbers; i++) {
        userNumbers.push(parseInt(prompt(`Введите ${i+1} число от 1 до ${lotteryCount}`)))
    }
}

function addRandomNumbers() {
    for(let i=0; i<lotteryNumbers; i++) {
        lotteryRandom.push(getRandomNumbers());
    }
}

function getRandomNumbers() {
    let min=1;
    return Math.floor(Math.random()*(lotteryCount-min+1))+min;
}

function showUserNumbers() {
    console.log(`Числа, что вы ввели:  ${userNumbers}`);
}

function showGetNumbers() {
    console.log(`Числа, что вы выпали:  ${verifyNumbers()}`);
}

function verifyNumbers() {
    let response=[];
    for(let i=0; i<lotteryRandom.length; i++) {
        let verify=false;
        for(let j=0; j<userNumbers.length; j++) {
            if(lotteryRandom[i]===userNumbers[j]) {
                verify=true;
                result++;
            }
        }
        response.push(`${lotteryRandom[i]}-${verify}`);
    }
    return response.join(', ');
}

function showResult() {
    console.log(`Результат: ${result}/${lotteryNumbers}`);
}

addUserNumbers();
addRandomNumbers();
showUserNumbers();
showGetNumbers();
showResult();