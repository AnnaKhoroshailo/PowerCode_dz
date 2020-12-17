function multiply (arr) {
	let newArr=[];
	for(let i=0; i<arr.length; i++) {
		newArr[i]=arr[i]*2;
	}
	return newArr;
}
document.write(multiply([1,-5,0,6])+"<br>");

function slice (n) {
	let arr=[];
	let str=[];
	for(let i=0; i<n; i++) {
		arr[i]=i+1;
		if(arr[i]%3==0) {
			str[i]="fizz";
		} 
		else if(arr[i]%5==0) {
			str[i]="buzz";
		}
		else if(arr[i]%3==0 && arr[i]%5==0) {
			str[i]="fizzbuzz";
		}
		else {
			str[i]=i+1;
		}
	}
	arr.slice(arr[0],n);
	return str;
}
document.write(slice(15)+"<br>");


function sum(a,b) {
	let newMatrix=[];
	for(let i=0; i<a.length; i++) {
		newMatrix[i]=[];
		for(let j=0; j<a[i].length; j++) {
			newMatrix[i][j]=a[i][j]+b[i][j];
		}
	}
	return newMatrix;
}
let a=[
	[4,5,13],
	[-5,0,4],
	[12,-3,12]
]
let b=[
	[5,8,0],
	[87,65,7],
	[-50,24,43]
]
document.write(sum(a,b));