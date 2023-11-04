let tg = window.Telegram.WebApp;
let start = document.getElementById("start");
let end = document.getElementById("end");

tg.expand();





tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";









Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});
