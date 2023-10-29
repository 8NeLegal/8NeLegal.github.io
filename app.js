let tg = window.Telegram.WebApp;
let start = document.getElementById("start");
let end = document.getElementById("end");

tg.expand();


start.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("form_data").style.display = "block";
});


end.addEventListener("click", () => {
    document.getElementById("form_data").style.display = "none";
    
    document.getElementById("form_send").style.display = "block";
});





tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";









Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});
