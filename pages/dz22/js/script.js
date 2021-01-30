function getCapacity(w=1,h=1,l=1) {
	let v=w*h*l;
	console.log(v);
}
getCapacity(45, 20, 10);
getCapacity(45,undefined,10);
getCapacity(45, 20);
getCapacity(undefined,undefined,19);


function getMinMax(param,...args) {
	if(param=='min') {
		let min=args[0];
		args.forEach(item=>{ 
			if(item<min) {
				min=item;
			}
		});
		console.log("Минимальный", min);
	}
	else if(param=='max') { //если else-подразумеваем, что может быть одновременно макс и мин
		let max=args[0];
		args.forEach(item=>{ 
			if(item>max) {
				max=item;
			}
		});
		console.log("Максимальный",max);
	}
}
getMinMax('min', 4, 8, 5, 6, 9, 3, 25, 15, 74, 58);
getMinMax('max', 4, 8, 5, 6, 9, 3, 25, 15, 74, 58);


let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[...arr1,...arr2];
console.log(arr3);


let allAuto=[];
let auto= {
	wheels: 4,
	type: 'sedan',
	na_hody: true,
	ne_bita: true,
	ne_krashena: true 
}
function addAuto() { 
	let auto1={
		model: 'Toyota Yaris',
		color: 'white'
	}
	let auto2={
		model: 'Honda Civic',
		color: 'red' 
	}
	let auto3={
		model: 'Mazda 3',
		color: 'black'
	}
	addNewAuto("Toyota",auto1);
	addNewAuto("Honda",auto2);
	addNewAuto("Mazda",auto3);
	console.log(allAuto);
}
function addNewAuto(typeAuto,args) { 
	allAuto.push(
		{
			typeAuto,
			...auto, 
			...args 
		}
	)
}
addAuto();