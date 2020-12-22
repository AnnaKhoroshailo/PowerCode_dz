let obj = {
	bread: 25,
	milk: 30,
	chips: 50,
	water: 10,
	cucumbers: 42
}
let sum=0;
for(let key in obj) {
	sum+=obj[key];
}
document.write("Общая стоимость покупок: "+sum+"<br>");

let biggestPrice=0;
let lowestPrice=0;
let productBiggest="";
let productLowest="";
for(let key in obj) {
	if(obj[key]>biggestPrice) {
		biggestPrice=obj[key];
		productBiggest=[key];
		lowestPrice=biggestPrice;
	}
	if(obj[key]<lowestPrice) {
		lowestPrice=obj[key];
		productLowest=[key];
	}
}
document.write("Самый дорогой товар: "+productBiggest+"<br>");
document.write("Самый дешевый товар: "+productLowest+"<br>");

let films =[ {
	title: 'Joker',
	rating: 8.1,
	premier: true
} ,
{
	title: 'Iron Man',
	rating: 7,
	premier: true
} ,
{
	title: 'Thor',
	rating: 7.5,
	premier: false
} 
,{
	title: 'Black Panther',
	rating: 8.2,
	premier: true
} ,
{
	title: 'Hulk',
	rating: 8.5,
	premier: false
} ]

let rating=0;
let average;
for(let i=0; i<films.length; i++) {
	rating+=films[i].rating;
}
average=rating/films.length;

document.write("Средняя оценка всех фильмов: "+average+"<br>");

let premier=[];
for(let i=0; i<films.length; i++) {
	if(films[i].premier===true) {
		premier.push(films[i].title)
	}
}
document.write("Премьеры: "+premier+"<br>");

document.write("Фильмы с рейтингом больше 8:"+"<br>");
for(let i=0; i<films.length; i++) {
	if(films[i].rating>8) {
		document.write(films[i].title+": "+films[i].rating+"<br>");
	}
}

