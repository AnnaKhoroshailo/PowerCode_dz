let a=prompt("Введите первое число: ");
let b=prompt("Введите второе число: ");
let s=a*b;
alert("Результат умножения: "+s);

let name=prompt("Ваше имя: ");
let surname=prompt("Ваша фамилия: ");
let performance=prompt("Выступление: ");
let theatre=prompt("Театр: ");
let sector=prompt("Сектор: ");
let range=prompt("Ряд: ");
let place=prompt("Место: ");
let time=prompt("Время: ");
let ticket=`<h2>Ваш билет:</h2> <p>Имя: ${name}</p> <p>Фамилия: ${surname}</p> <p>Выступление: ${performance}</p> 
<p>Театр: ${theatre} </p> <p>Сектор: ${sector}</p> <p>Ряд: ${range}</p> <p>Место: ${place} </p> <p>Время: ${time}</p>`;
document.getElementById("ticket").innerHTML = ticket;
