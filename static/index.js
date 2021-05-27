// ci ho speso fin troppo tempo e già me ne pento

const urlParams = new URLSearchParams(location.search);

const buddies = [
	{
		src: "static/img/gp.png",
		side: "left",
		text: {
			color: "blue",
			stroke: "2px white"
		},
		customPhrases: []
	},
	{
		src: "static/img/gd.png",
		side: "right",
		text: {
			color: "red",
			filter: "drop-shadow(5px 5px 10px rgba(255,255,0,.5)) drop-shadow(0px 0px 5px orange)"
		},
		customPhrases: []
	},
];

const commonPhrases = [
	"qst kantieri sono molto bello",
	"kuesto kantieri fa schifo",
	"ke kazo guardi kolione",
	"viva futaba",
	"signo' la rosa venisse a vedere stu kantieri",
	"questo kantieri mi fa sburare",
	"mi secco a scrivere immaginati una frase qua",
	"minkia"
];

function main() {
	if(urlParams.get('victini')){
		const container = document.getElementById("lol");
		const img = document.getElementById("xd");
		const text = document.getElementById("katania");
		const buddy = getRandom(buddies);

		container.classList.add(`side-${buddy.side}`);

		img.src = buddy.src;
		text.innerHTML = getRandom([...commonPhrases, ...buddy.customPhrases]);
		text.style.color = buddy.text.color;
		text.style.webkitTextStroke = buddy.text.stroke || "";
		text.style.filter = buddy.text.filter || "";
	}else{
		document.getElementById("lol").remove();
	}
}

function getRandom(array){
	const i = Math.round(Math.random() * (array.length - 1));
	return array[i];
}

window.onload = main;