let features = [
	{
		title: "Suspendisse",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
		link: 'https://test.com',
		iconSrc: "https://pngimg.com/uploads/like/like_PNG71.png",
		backgroundItem: "#fff",
		backgroundBut: "#e35a10"
	},
	{
		title: "Maecenas",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
		link: 'https://test.com',
		iconSrc: "https://www.freepnglogos.com/uploads/key-png/key-icon-housing-and-residential-life-28.png",
		backgroundItem: "#e6cbbc",
		backgroundBut: "#b4d60b"
	},
	{
		title: "Aliquam",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
		link: 'https://test.com',
		iconSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7wTEBP8hB6_9ADMMPEhcO_timBkTSvPcpcb7mSaBhpNfYThj-",
		backgroundItem: "#f2d6c7",
		backgroundBut: "#57fa62"
	},
	{
		title: "Habitasse",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
		link: 'https://test.com',
		iconSrc: "https://s1.iconbird.com/ico/2013/3/635/w240h264139388538316.png",
		backgroundItem: "#f0c4ad",
		backgroundBut: "#d11d77"
	}
]
let items=document.createElement("section");
document.body.appendChild(items);
items.style.background="#eee";
items.style.padding="50px";
items.style.display="flex";
items.style.justifyContent="space-between";
for(let i=0; i<features.length; i++) {
	let item=document.createElement("div");
	let img = `<img src='${features[i].iconSrc}'"><h2>${features[i].title}</h2><p>${features[i].text}</p><a href="${features[i].link}">Read more</a>`;
	item.innerHTML=img;
	items.appendChild(item);
	item.style.flex="0 0 23%";
	item.style.display="flex";
	item.style.flexDirection="column";
	item.style.justifyContent="space-between";
	item.style.padding="30px 5px";
	item.style.background=`${features[i].backgroundItem}`;
	item.style.color="#333";
	item.style.textAlign="center";
	item.firstChild.style.width="40%";
	item.firstChild.style.margin="0 auto";
	item.firstChild.style.display="block";
	item.lastChild.style.textDecoration="none";
	item.lastChild.style.color="#fff";
	item.lastChild.style.background=`${features[i].backgroundBut}`;
	item.lastChild.style.display="block";
	item.lastChild.style.padding="10px";
}
