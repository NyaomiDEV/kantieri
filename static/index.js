// ci ho speso fin troppo tempo e già me ne pento

const urlParams = new URLSearchParams(location.search);

const buddies = [
	{
		src: "static/img/gp.png",
		text: {
			color: "blue",
			stroke: "2px white"
		}
	},
	{
		src: "static/img/gd.png",
		text: {
			color: "red",
			filter: "drop-shadow(5px 5px 10px rgba(255,255,0,.5)) drop-shadow(0px 0px 5px orange)"
		}
	},
];

const phrases = [
	"qst kantieri sono molto bello",
	"kuesto kantieri fa schifo",
	"ke kazo guardi kolione",
	"viva futaba",
	"signo' la rosa venisse a vedere stu kantieri",
	"questo kantieri mi fa sburare",
	"mi secco a scrivere immaginati una frase qua"
]

function main() {
	if(urlParams.get('victini')){
		const img = document.getElementById("xd");
		const text = document.getElementById("katania");
		const buddy = buddies[Math.round(Math.random())];

		img.src = buddy.src;
		text.innerHTML = phrases[Math.round(Math.random() * 3)];
		text.style.color = buddy.text.color;
		text.style.webkitTextStroke = buddy.text.stroke || "";
		text.style.filter = buddy.text.filter || "";
	}else{
		document.getElementById("lol").remove();
	}
}

window.onload = main;