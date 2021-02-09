class House {
	static type='Харьковские дома'
	constructor(options) {
		this.city='Харьков'
		this.street=options.street
		this.house=options.house
		this.floor=options.floor
		this.material=options.material
		this.basement=options.basement
	}
	get houseAddress(){ 
		return this.street+', '+this.house
	}
	set houseAddress(newAddress){ 
		if(newAddress.indexOf('Победоносная') != -1 ) {
			this.undeground='Алексееевская'
		}
	}
	getAddress(){
		console.log(this.houseAddress)
	}
}

class PrivateHouse extends House{ 
	static type='Частные дома'
	constructor(options) { 
		super(options)
		this.gas=options.gas
		this.water=options.water
		this.electrician=options.electrician
	}
	get livingConditions(){ 
		return (this.gas==true && this.water==true) ? 'Газ и вода есть':'Газа или воды нет'
	}
	set livingConditions(newConditions){ 
		if(newConditions.indexOf('есть')!=-1) {
			this.renovation='В доме произведен ремонт и есть все необходимое для жизни'
		}
	}
}

const HOUSE1=new PrivateHouse({
	street: 'Победоносная',
	house: 50,
	floor: 1,
	material: 'Кирпич',
	basement: true,
	gas: false,
	water: true,
	electrician: true
})

const HOUSE2=new PrivateHouse({
	street: 'Ахсарова',
	house: 10,
	floor: 2,
	material: 'Дерево',
	basement: false,
	gas: true,
	water: true,
	electrician: false
})

class HighRiseBuilding extends House{ 
	static type='Многоэтажки'
	constructor(options) { 
		super(options)
		this.numberApartmentsEntrance=options.numberApartmentsEntrance
		this.numberElevators=options.numberElevators
		this.accessSystem=options.accessSystem
	}
	get numberApartmentsFloor(){ 
		return this.numberApartmentsEntrance/this.floor
	}
	set numberApartmentsFloor(newNumberApartmentsFloor){ 
		this.numberApartmentsEntrance=newNumberApartmentsFloor*this.floor
	}
}

const BUILDING1=new HighRiseBuilding({
	street: 'Проспект Гагарина',
	house: 25,
	floor: 5,
	material: 'Кирпич',
	basement: true,
	numberApartmentsEntrance: 15,
	numberElevators: 1,
	accessSystem: 'Консьерж'
})

const BUILDING2=new HighRiseBuilding({
	street: 'Авиационная',
	house: 19,
	floor: 9,
	material: 'Панель',
	basement: true,
	numberApartmentsEntrance: 36,
	numberElevators: 2,
	accessSystem: 'Домофон'
})


HOUSE1.getAddress();
HOUSE1.livingConditions='Газ и вода есть';
console.log(HOUSE1.renovation);

console.log(HOUSE2.livingConditions);
HOUSE2.houseAddress='Победоносная 40';
console.log(HOUSE2.undeground);

BUILDING1.numberApartmentsFloor=5
console.log(BUILDING1.numberApartmentsEntrance);

console.log(BUILDING2.numberApartmentsFloor);




