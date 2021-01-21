let products= [
	{
		name: 'Apple iPhone 12',
		price: 1000,
		currency: 'USD',
		status: 'active'
	},
	{
		name: 'Xiaomi Redmi Note 9',
		price: 600,
		currency: 'USD',
		status: 'active'
	},
	{
		name: 'Samsung Galaxy s20',
		price: 850,
		currency: 'USD',
		status: 'active'
	},
	{
		name: 'Apple iPhone X',
		price: 550,
		currency: 'USD',
		status: 'active'
	},
	{
		name: 'Xiaomi Redmi 5',
		price: 200,
		currency: 'USD',
		status: 'not_available'
	},
	{
		name: 'Samsung Note 8',
		price: 400,
		currency: 'USD',
		status: 'not_active'
	},
]

let activeProducts1=products.filter(function(product){
	return product.status=="active";
});
console.log(activeProducts1);

let activeProducts2=products.filter(product=>product.status=="active");
console.log(activeProducts2);

let expensiveProducts1=products.filter(function(product){
	return product.price>650;
});
console.log(expensiveProducts1);

let expensiveProducts2=products.filter(product=>product.price>650);
console.log(expensiveProducts2);


let sumActive1=activeProducts1.map(function(product){
	return product.price;
}).reduce(function(sum, current){
	return sum+current;
},0);
console.log(sumActive1);

let sumActive2=activeProducts2.map(product => product.price).reduce((sum,current)=>sum+current);
console.log(sumActive2);


products.forEach(product=>{
	product.is_phone="true";
	if(product.price>800) {
		product.premium="true";
	}
});
console.log(products);

