let house={
	city: 'Харьков',
	floor: 20,
	material: 'Кирпич',
	basement: true,
	showInfo: function(attic,address){
		if(address) {
			console.group(`Дом ${address}`);
		}
		else {
			console.group('Дом');
		}
		console.log(`Город ${this.city}`);
		console.log(`Этажей ${this.floor}`);
		console.log(`Материал ${this.material}`);
		console.log(`Подвал ${this.basement}`);
		if(attic) {
			console.log(`Чердак ${attic}`);
		}
		if(address) {
			console.log(`Адрес ${address}`);
		}
		console.groupEnd;
	}
}
let house_01=Object.create(house);
house_01.attic=true;
house_01.address='Победоносная, 19';
console.log(house);
console.log(house_01);


house.showInfo();
house_01.showInfo(house_01.attic, house_01.address);


house_01.getHouseAddress=function(){
	return this.address;
}
console.log(house_01.getHouseAddress());


let house_02=Object.create(house);
house_02.attic=false;
house_02.address='Победоносная, 20';
house_02.showInfo(house_02.attic, house_02.address);
console.log(house_01.getHouseAddress.call(house_02, house_02.address));
