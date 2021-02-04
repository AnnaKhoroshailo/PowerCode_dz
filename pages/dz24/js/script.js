const PR=new Promise(function(resolve, reject){ 
	setTimeout(()=>{
		let str="Я что-то сделал за 6 секунд";
		resolve(str);
	},6000);
})
PR.then(str=>{ 
	console.log(str);
});


function getData(){
	const PR=new Promise(function(resolve, reject){ 
		setTimeout(()=>{ 
			let data = [
				{
					name: 'User1',
					status: 'verified',
					avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
					email: 'test@gmail.com',
					phone: '380955555555'
				},
				{
					name: 'User1',
					status: 'verified',
					avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
					email: 'test@gmail.com',
					phone: '380955555555'
				},
				{
					name: 'User1',
					status: 'verified',
					avatar: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
					email: 'test@gmail.com',
					phone: '380955555555'
				}
			]
			resolve(data);
		},1000);
	});
	PR.then(data=>{ 
		console.log("Данные пришли");
		return new Promise(function(resolve, reject){
			setTimeout(()=>{ 
				resolve(data);
			},1000);
		});
	}).then(responseData=>{ 
		console.log("Данные обработаны",responseData);
	})
};
getData();


function createEmail(mail) { //замыкаем переменную домена
	return function(address) {
		return `${address}.${mail}`;
	}
}
let gmailMail = createEmail('gmail.com');
console.log(gmailMail('valeriy.gorbachevskiy'));   // valeriy.gorbachevskiy@gmail.com